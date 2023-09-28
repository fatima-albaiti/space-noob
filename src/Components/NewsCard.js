import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { createSearchParams, useNavigate } from "react-router-dom";

function NewsCard(props) {
    const navigate = useNavigate()
    const { article } = props;
    const params = {id: article.id};

    const handleReadMore = () => {
       navigate({pathname: '/article', search: `?${createSearchParams(params)}`})
    }
    return (
        <div className='article-card'>
        <Row>
            <Col sm={6} xs={12} md={4} lg={3}>
                <Image className=' w-100 h-100' src={article.imgUrl}  />
            </Col>
            <Col className='card-text' sm={6} xs={12} md={8} lg={9}>
                <h4>{article.title}</h4>
                <p className='date'>{article.date}</p>
                <p className='summary multiline-ellipsis three-lines'> {article.content}</p>
                 <Button onClick={handleReadMore} className='float-end float-bottom read-more btn-lg'>Read more</Button>
            </Col>
        </Row>
        
        </div>
    )
}

export default NewsCard;