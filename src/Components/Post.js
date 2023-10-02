import { Image } from "react-bootstrap";
import { PostType } from "../Objects/PostType";
import { useSearchParams, Link } from 'react-router-dom'
import { useState, useCallback, useEffect } from 'react'
import { doc, getDoc} from 'firebase/firestore'
import { db } from '../firebase_setup/firebase';
import moment from 'moment';
import {Parser} from 'html-to-react';

function Post(props) {

    const [searchParams] = useSearchParams();
    const [post, setPost] = useState({postDate: {}});
    const postId = searchParams.get("id");
    const htmlParser = new Parser();
    const { postType } = props;

    const fetchData = useCallback( async () => {
        const postRef = doc(db, "posts", postId);
        const postItem = await getDoc(postRef);
        console.log(postItem.data());
        setPost(postItem.data());
    }, [postId])

    useEffect(()=> {
        fetchData();
    }, [fetchData])
    
    const getDate = (timestamp) => {
        return moment(new Date(timestamp.seconds * 1000)).format('DD/MM/YYYY');
    }

    const renderSource = (srcUrl) => {
        return (
            <>
            <span className="date">Source: </span>
            <Link className="date" to={srcUrl}>URL</Link>
            </>
        )
    }

    return (
        <div className="content news news-article">
            <h2>{post.postTitle}</h2>
            <p className="date">{post.postAuthor} | {getDate(post.postDate)}</p>
            <div className="share-icons">
                <i className="bi bi-share share-icon "></i>
                <i className="bi bi-facebook share-icon "></i>
                <i className="bi bi-messenger share-icon "></i>
                <i className="bi bi-whatsapp share-icon "></i>
            </div>
            
            <Image src={post.imgUrl} />
            
            <div className="post-content">
                {htmlParser.parse(post.postContent)}
                <hr></hr>
            </div>

            {postType === PostType.ARTICLE && renderSource(post.postSrc)}
        </div>
    )
}

export default Post;