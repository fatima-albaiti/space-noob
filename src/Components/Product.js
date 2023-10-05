import { Col, Card, Button } from "react-bootstrap";

function Product(props) {
    const { product } = props;
    const handleGoToAmazon = (productUrl) => {
        window.location.href = productUrl;
    }
    return (
        <Col className="col-4" xl={3} lg={3} md={4} sm={6} xs={12}>
        <Card className="amazon-card">
            <Card.Img src={product.imgUrl}></Card.Img>
            <Card.Body>
            <Card.Title className="multiline-ellipsis one-line">{product.productName}</Card.Title>
                <Card.Text className="multiline-ellipsis three-lines">{product.productDescription}</Card.Text>
                <Button className="button-primary" onClick={()=>{handleGoToAmazon(product.productUrl)}}>Go to Amazon</Button>
            </Card.Body>
        </Card>
        </Col>
    )
}

export default Product;