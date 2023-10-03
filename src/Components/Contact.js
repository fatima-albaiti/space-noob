import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useRef, useState} from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import {db} from '../firebase_setup/firebase';
import {collection, addDoc} from '@firebase/firestore'
function Contact() {
    const form = useRef();
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");
    const [ setRecaptcha ] = useState('')
    const [ isVerified, setIsVerified ] = useState('')
    const collection_name = "contact_messages";

    function save() { 
        var tempDate = new Date();
        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() +' '+ tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();
        addDoc(collection(db, collection_name), {subject: subject, body: body, timestamp: date}) 
    }
    
    const sendEmail = (e) => {
        
        e.preventDefault();
        if(isVerified){
        console.log(subject, body);
             save();
        }
    };

    const handleSubjectChange = (e) => {
        setSubject(e.target.value);
    }

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    }
    
    const onChange = (value) => {
        setRecaptcha(value);
        if (value) {
        setIsVerified(true);
        } else {
        setIsVerified(false);
        }
    }
    return (
        <div className='section'>
            <h1>Send an e-mail</h1>
            <p>Got any suggestions or enquiries? Let me know!</p>
            <Form method='post' onSubmit={sendEmail} ref={form} className='contact-form'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control onChange={handleSubjectChange} value={subject} name='messageSubject' placeholder='Subject' className='input-primary' type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control onChange={handleBodyChange} value={body} name='messageBody' placeholder='Type your message here...' className='input-primary' as="textarea" rows={3} />
            </Form.Group>
            <ReCAPTCHA
                sitekey='6LfsfW4oAAAAACQb95ZFesS7Sg1_1qvpBDMtZcAs'
                onChange={onChange}
             />
            <Button className='button-primary'  variant="primary" type="submit">
            Send E-mail
            </Button>
            </Form>
            
        </div>
  
    )
}

export default Contact;