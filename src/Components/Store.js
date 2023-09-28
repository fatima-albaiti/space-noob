import { useEffect, useState } from "react";
import { Row, Col, Card, Button, ButtonGroup } from "react-bootstrap";
import { Category } from "../Objects/Category";
import Product from "./Product";

function Store() {
    const [category, setCategory] = useState(Category.BOOKS);
    const [productsList, setProductsList] = useState([]);

    useEffect(()=> {
        setProductsList([
            {
                productId: 1,
                productUrl: "https://amzn.eu/d/12Usic6",
                imgUrl: "https://m.media-amazon.com/images/I/A1KS+MYYXkL._SL1500_.jpg",
                productName: "Stargazing for Beginners: Explore the Wonders of the Night Sky",
                productDescription: "Discover the wonders of the Universe with this complete introduction to observing and understanding the night sky.",
                category: "Books",
            },
            {
                productId: 2,
                productUrl: "https://amzn.eu/d/12Usic6",
                imgUrl: "https://m.media-amazon.com/images/I/A1KS+MYYXkL._SL1500_.jpg",
                productName: "Stargazing for Beginners: Explore the Wonders of the Night Sky",
                productDescription: "Discover the wonders of the Universe with this complete introduction to observing and understanding the night sky.",
                category: "Books",
            },
            {
                productId: 3,
                productUrl: "https://amzn.eu/d/12Usic6",
                imgUrl: "https://m.media-amazon.com/images/I/A1KS+MYYXkL._SL1500_.jpg",
                productName: "Stargazing for Beginners: Explore the Wonders of the Night Sky",
                productDescription: "Discover the wonders of the Universe with this complete introduction to observing and understanding the night sky.",
                category: "Books",
            }
        ])
    }, []);

    

    const handleCategory = (e) => {
        setCategory(e.target.innerHTML);
    }

    
    return (
        <div className="content">
            <h2 className="page-title">Store</h2>

            <ButtonGroup aria-label="Basic example">
                <Button onClick={(event)=>handleCategory(event)} className={category === Category.BOOKS ? "active": undefined} variant="secondary">{Category.BOOKS}</Button>
                <Button onClick={(event)=>handleCategory(event)} className={category === Category.GADGETS ? "active": undefined} variant="secondary">{Category.GADGETS}</Button>
                <Button onClick={(event)=>handleCategory(event)} className={category === Category.ACCESSORIES ? "active": undefined} variant="secondary">{Category.ACCESSORIES}</Button>
                <Button onClick={(event)=>handleCategory(event)} className={category === Category.OTHER ? "active": undefined} variant="secondary">{Category.OTHER}</Button>
            </ButtonGroup>

            <Row>
                {
                    productsList.map((product) => (
                        product.category === category && <Product product={product} />  
                    ))
                }
                
            </Row>
        </div>
    )
}

export default Store;