import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Contact() {
    return (
        <div className='section'>
            <h1>Contact us</h1>
            <p>Send us an e-mail</p>
            <Form className='contact-form'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
            Send E-mail
            </Button>
            </Form>
        </div>
        
    )
}

export default Contact;