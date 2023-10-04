import { useCallback, useEffect, useState } from "react";
import PostCard from "./PostCard";
import { PostType } from "../Objects/PostType";
import axios from "axios";
function Posts(props) {
    const [postsList, setPostsList] = useState([]);
    const { postType } = props;

    const fetchData = useCallback(
        async() => {
          const response = await axios.get(`https://us-central1-space-noob.cloudfunctions.net/api/posts?postType=${postType}`);
          setPostsList(response.data);
        }, [postType]
    ) 

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