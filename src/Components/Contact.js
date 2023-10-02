import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser'
import {useRef, useEffect} from 'react'

function Contact() {
    const form = useRef();

    useEffect(() => {
        // Add reCaptcha
        const script = document.createElement("script")
        script.src = "https://www.google.com/recaptcha/api.js?render=6LfzQW4oAAAAAHWCTxLKkygfQkLqgUrQjkNTodTo"
        script.addEventListener("load", handleLoaded)
        document.body.appendChild(script)
      }, [])
    

      const handleLoaded = _ => {
        window.grecaptcha.ready(_ => {
          window.grecaptcha
            .execute("6LfzQW4oAAAAAHWCTxLKkygfQkLqgUrQjkNTodTo", { action: "homepage" })
            .then(token => {
              // ...
            })
        })
      }
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9akv15m', 'template_um6ttcu', form.current, 'LpG1HslFJR_Zkl-f0')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        
    };
    
    return (
        <div className='section'>
            <h1>Send an e-mail</h1>
            <p>Got any suggestions or enquiries? Let me know!</p>
            <Form onSubmit={sendEmail} ref={form} className='contact-form'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control name='messageSubject' placeholder='Subject' className='input-primary' type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control name='messageBody' placeholder='Type your message here...' className='input-primary' as="textarea" rows={3} />
            </Form.Group>
            <Button className='button-primary'  variant="primary" type="submit">
            Send E-mail
            </Button>
            <div
                className="g-recaptcha"
                data-sitekey="6LfzQW4oAAAAAHWCTxLKkygfQkLqgUrQjkNTodTo"
                data-size="invisible"
            ></div>
            </Form>

        </div>

        
        
    )
}

export default Contact;