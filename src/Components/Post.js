import { Image } from "react-bootstrap";
import { PostType } from "../Objects/PostType";
import { useSearchParams, Link } from 'react-router-dom'
import { useState, useCallback, useEffect } from 'react'
import { doc, getDoc} from 'firebase/firestore'
import { db } from '../firebase_setup/firebase';
import moment from 'moment';
import {Parser} from 'html-to-react';
import { FacebookShareButton, FacebookIcon, 
    WhatsappShareButton, WhatsappIcon, FacebookMessengerIcon, FacebookMessengerShareButton,
    EmailIcon, EmailShareButton,
    TwitterShareButton, TwitterIcon } from 'react-share';

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
            <FacebookShareButton className="share-icon"
                url={window.location.href}
                quote={post.postContent}
                hashtag="#spacenoob"
            >
            <FacebookIcon size={32} round />
            </FacebookShareButton>

            <TwitterShareButton className="share-icon"
                url={window.location.href}
                quote={post.postContent}
                hashtag="#spacenoob"
            >
            <TwitterIcon size={32} round />
            </TwitterShareButton>

            <WhatsappShareButton
                className="share-icon"
                url={window.location.href}
                quote={post.postContent}
                hashtag="#spacenoob"
            >
            <WhatsappIcon size={32} round></WhatsappIcon>
            </WhatsappShareButton>

            <FacebookMessengerShareButton
                className="share-icon"
                url={window.location.href}
                quote={post.postContent}
            >
            <FacebookMessengerIcon size={32} round></FacebookMessengerIcon>
            </FacebookMessengerShareButton>

            <EmailShareButton
                className="share-icon"
                url={window.location.href}
                quote={post.postContent}
            >
            <EmailIcon size={32} round></EmailIcon>
            </EmailShareButton>
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