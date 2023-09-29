import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { createSearchParams, useNavigate } from "react-router-dom";
import { PostType } from '../Objects/PostType';

function PostCard(props) {
    const navigate = useNavigate()
    const { post, postType } = props;
    const params = {id: post.id};

    const handleReadMore = () => {
       navigate({pathname: postType === PostType.ARTICLE ? '/article' : '/blog', search: `?${createSearchParams(params)}`})
    }
    
    return (
        <div className='article-card'>
        <Row>
            <Col sm={6} xs={12} md={4} lg={3}>
                <Image className='w-100 h-100' src={post.imgUrl}  />
            </Col>
            <Col className='card-text' sm={6} xs={12} md={8} lg={9}>
                <h4>{post.title}</h4>
                <p className='date'>{post.date}</p>
                <p className='summary multiline-ellipsis three-lines'> {post.content}</p>
                 <Button onClick={handleReadMore} className='float-end float-bottom read-more btn-lg button-primary'>Read more</Button>
            </Col>
        </Row>
        
        </div>
    )
}

export default PostCard;