import { useCallback, useEffect, useState } from "react";
import { Row, Button, ButtonGroup } from "react-bootstrap";
import { Category } from "../Objects/Category";
import Product from "./Product";
import  { TailSpin } from 'react-loader-spinner';
import axios from "axios";

function Store() {
    const [category, setCategory] = useState(Category.BOOKS);
    const [productsList, setProductsList] = useState([]);
    const [loader, setLoader] = useState("none");

    const fetchData = useCallback(
        async () => {
            setLoader("");
            setProductsList([]);
            await axios.get(`https://us-central1-space-noob.cloudfunctions.net/api/products?category=${category}`)
            .then (
                (response) => {
                    setLoader("none");
                    setProductsList(response.data);
                }
            );
            
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
                {/* <Button onClick={(event)=>handleCategory(event)} className={category === Category.ACCESSORIES ? "active": undefined} variant="secondary">{Category.ACCESSORIES}</Button> */}
                <Button onClick={(event)=>handleCategory(event)} className={category === Category.OTHER ? "active": undefined} variant="secondary">{Category.OTHER}</Button>
            </ButtonGroup>

            <div className="loading-spinner" style={{display: loader}}>
            <TailSpin
                color="#00BFFF"
                height={100}
                width={100}
            />
            </div>
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