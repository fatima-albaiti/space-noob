import { Image } from "react-bootstrap";
import { PostType } from "../Objects/PostType";
import { useSearchParams, Link } from 'react-router-dom'
import { useState, useEffect, useCallback } from 'react'
import axios from "axios";
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
        const response = await axios.get(`https://us-central1-space-noob.cloudfunctions.net/api/post?id=${postId}`);
        setPost(response.data);
        console.log(response.data);
    }, [postId])

    useEffect(()=> {
        fetchData();
    }, [fetchData])
    
    const getDate = (timestamp) => {
        return moment(new Date(timestamp._seconds * 1000)).format('DD/MM/YYYY');
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