import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
function NewsCard() {
    return (
        <div className='article-card'>
        <Row>
            <Col sm={6} xs={12} md={4} lg={3}>
                <Image className=' w-100 h-100' src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"  />
            </Col>
            <Col className='card-text' sm={6} xs={12} md={8} lg={9}>
                <h4>Article Title</h4>
                <p className='date'>01/01/2023</p>
                <p className='summary'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                 <Button className='float-end float-bottom read-more btn-lg'>Read more</Button>
            </Col>
        </Row>
        
        </div>
    )
}

export default NewsCard;