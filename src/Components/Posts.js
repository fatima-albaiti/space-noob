import { useEffect, useState, useCallback } from "react";
import PostCard from "./PostCard";
import { PostType } from "../Objects/PostType";
import { db } from '../firebase_setup/firebase';
import { collection, query, orderBy, onSnapshot, where } from 'firebase/firestore'
function Posts(props) {
    const [postsList, setPostsList] = useState([]);
    const { postType } = props;

    const fetchData = useCallback( async () => {
        const posts_collection = collection(db, "posts")
        const q = query(posts_collection, orderBy("postDate", "desc"), where("postType", "==", postType));
        onSnapshot(q, (querySnapShot) => {
        const data = querySnapShot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))
        setPostsList(data);
        });
    }, [postType])

    useEffect(()=> {
        fetchData();
    }, [fetchData]);
  
    const renderPosts = (list) => {
        return list.map((item)=> (
            <PostCard key={item.id} post={item} postType={postType} />
        ))
    }
    
    return (
        <div className="content news">
            <h2 className="page-title">{postType === PostType.ARTICLE ? "Space Related News" : "Blog"}</h2>

            {renderPosts(postsList)}

        </div>
    )
}

export default Posts;