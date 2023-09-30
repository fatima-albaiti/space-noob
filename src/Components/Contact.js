import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Contact() {
    return (
        <div className='section'>
            <h1>Send an e-mail</h1>
            <p>Got any suggestions or enquiries? Let me know!</p>
            <Form className='contact-form'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control placeholder='Subject' className='input-primary' type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control placeholder='Type your message here...' className='input-primary' as="textarea" rows={3} />
            </Form.Group>
            <Button className='button-primary' variant="primary" type="submit">
            Send E-mail
            </Button>
            </Form>
        </div>
        
    )
}

export default Contact;