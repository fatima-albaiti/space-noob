import { useCallback, useEffect, useState } from "react";
import PostCard from "./PostCard";
import { PostType } from "../Objects/PostType";
import {TailSpin} from 'react-loader-spinner';
import axios from "axios";
function Posts(props) {
    const [postsList, setPostsList] = useState([]);
    const [loader, setLoader] = useState("none");
    const [noPosts, setNoPosts] = useState(false);
    const { postType } = props;

    const fetchData = useCallback(
        async() => {
            setLoader("");
            await axios.get(`https://us-central1-space-noob.cloudfunctions.net/api/posts?postType=${postType}`)
            .then(
                (response) => 
                {
                    setLoader("none");
                    setPostsList(response.data);
                    if(response.data.length === 0) setNoPosts(true);
                    else setNoPosts(false);
                }
            )
            
        }, [postType]
    ) 

    useEffect(()=> {
        fetchData();
    }, [fetchData]);
  
    const renderPosts = (list) => {
        if(list.length > 0)
        {
            return list.map((item)=> (
            <PostCard key={item.id} post={item} postType={postType} />
        ))
        }
    }
    
    return (
        <div className="content news">
            <h2 className="page-title">{postType === PostType.ARTICLE ? "Space Related News" : "Diary of a Space Noob"}</h2>

            <div className="loading-spinner" style={{display: loader}}>
            <TailSpin
                color="#00BFFF"
                height={100}
                width={100}
            />
            </div>
            
            {noPosts && <div className="no-articles"><h4 className="no-articles">{postType === PostType.ARTICLE ? 'No articles yes' : 'No diary entries yet'}</h4></div>}
            {renderPosts(postsList)}

        </div>
    )
}

export default Posts;