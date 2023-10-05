import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useRef, useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import { Alert } from 'react-bootstrap';
import axios from 'axios';
function Contact() {
    const form = useRef(null);
    const captchaRef = useRef(null);
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const REACT_APP_SITE_KEY = "6LfsfW4oAAAAACQb95ZFesS7Sg1_1qvpBDMtZcAs";

    async function sendMail() { 
        const data = {subject: `Message from the contact page: ${subject}`, body: body}
        await axios.post("https://us-central1-space-noob.cloudfunctions.net/api/sendmailtome", data);
    }

    const verifyToken = async (token) => {
      try {
        const response = await axios.post("https://us-central1-space-noob.cloudfunctions.net/api/verify-token", {token: token});
        return response.data
      }
      catch(error) {
        console.log("error", error);
      }

    }
    
    const sendEmail = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        const token = captchaRef.current.getValue();
        if (subject && body) {
          const validToken = await verifyToken(token);
          if(validToken.success) {
            setError("");
            setSuccess("Form submitted!");
            setSubject("");
            setBody("");
            sendMail();
          }
          else {
            setError("Invalid token.");
          }
        }
        else {
          setError("Subject and Message are required");
        }
        
    };

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    }

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    }
    
    
    return (
        <div className='section'>
            <h1>Send an e-mail</h1>
            <p>Got any suggestions or enquiries? Let me know!</p>

            <Form method='post' onSubmit={sendEmail} ref={form} className='contact-form'>
                {error && <Alert variant='danger'>Error: {error}</Alert>}
                {success && <Alert variant='success'>{success}</Alert>}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control onChange={handleSubjectChange} value={subject} name='messageSubject' placeholder='Subject' className='input-primary' type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control onChange={handleBodyChange} value={body} name='messageBody' placeholder='Type your message here...' className='input-primary' as="textarea" rows={3} />
            </Form.Group>

            <ReCAPTCHA align='center' sitekey={REACT_APP_SITE_KEY} ref={captchaRef} />

            <Button style={{marginTop:"10px"}} className='button-primary'  variant="primary" type="submit">
                Send E-mail
            </Button>

            </Form>
            
        </div>
  
    )
}

export default Contact;