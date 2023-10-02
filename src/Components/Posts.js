import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { PostType } from "../Objects/PostType";
import { db } from '../firebase_setup/firebase';
import { collection, query, orderBy, onSnapshot} from 'firebase/firestore'
function Posts(props) {
    const [postsList, setPostsList] = useState([]);
    const { postType } = props;

    useEffect(()=> {
        fetchData();
    }, [postType]);

    const fetchData = async () => {
        const posts_collection = collection(db, "posts")
        const q = query(posts_collection, orderBy("postDate", "desc"));
        onSnapshot(q, (querySnapShot) => {
        const data = querySnapShot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }))
        setPostsList(data);
        console.log(data);
        });
    }
  
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