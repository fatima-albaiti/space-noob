import { useCallback, useEffect, useState } from "react";
import { Row, Button, ButtonGroup } from "react-bootstrap";
import { Category } from "../Objects/Category";
import Product from "./Product";
import axios from "axios";

function Store() {
    const [category, setCategory] = useState(Category.BOOKS);
    const [productsList, setProductsList] = useState([]);

    const fetchData = useCallback(
        async () => {
            const response = await axios.get(`https://us-central1-space-noob.cloudfunctions.net/api/products?category=${category}`);
            setProductsList(response.data);
        }, [category]
    )

    useEffect(()=> {
        fetchData()
    }, [fetchData]);

    const handleCategory = (e) => {
        setCategory(e.target.innerHTML);
        console.log(category);
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
                        <Product key={product.id} product={product} />  
                    ))
                }
            </Row>
        </div>
    )
}

export default Store;