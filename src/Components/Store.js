import { useEffect, useState, useCallback } from "react";
import { Row, Button, ButtonGroup } from "react-bootstrap";
import { Category } from "../Objects/Category";
import Product from "./Product";
import { db } from '../firebase_setup/firebase';
import { collection, query, onSnapshot, where } from 'firebase/firestore'

function Store() {
    const [category, setCategory] = useState(Category.BOOKS);
    const [productsList, setProductsList] = useState([]);

    const fetchData = useCallback( async () => {
        const posts_collection = collection(db, "products")
        const q = query(posts_collection, where("productCategory", "==", category));
        onSnapshot(q, (querySnapShot) => {
        const data = querySnapShot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))
        setProductsList(data);
        });
    }, [category])

    useEffect(()=> {
        fetchData()
        
    }, [fetchData]);

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
                        <Product product={product} />  
                    ))
                }
            </Row>
        </div>
    )
}

export default Store;