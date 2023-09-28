import { Row, Col, Card, Button, ButtonGroup } from "react-bootstrap";

function Product(props) {
    const { product } = props;
    const handleGoToAmazon = (productUrl) => {
        window.location.href = productUrl;
    }
    return (
        <Col className="col-4" xl={3} lg={3} md={4} sm={6} xs={12}>
        <Card key={product.productId} className="amazon-card">
            <Card.Img src={product.imgUrl}></Card.Img>
            <Card.Body>
            <Card.Title className="multiline-ellipsis two-lines">{product.productName}</Card.Title>
                <Card.Text className="multiline-ellipsis three-lines">{product.productDescription}</Card.Text>
                <Button onClick={()=>{handleGoToAmazon(product.productUrl)}}>Go to Amazon</Button>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default Product;