import { Image } from "react-bootstrap";
//import { useSearchParams } from "react-router-dom";
import { PostType } from "../Objects/PostType";
function Post(props) {

    const { postType } = props;
    //const [searchParams] = useSearchParams();
    
    return (
        <div className="content news news-article">
            <h2>Article Title</h2>
            <p className="date">Author: Tama Al-Baiti | 01/01/2023</p>
            <div className="share-icons">
                <i className="bi bi-share share-icon "></i>
                <i className="bi bi-facebook share-icon "></i>
                <i className="bi bi-messenger share-icon "></i>
                <i className="bi bi-whatsapp share-icon "></i>
            </div>
            
            <Image src="https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg" />
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dignissim odio et consectetur tempor. Vestibulum hendrerit tortor et dui consectetur, at volutpat dui euismod. Morbi nec tortor convallis, finibus diam vitae, ultricies nulla. Quisque dictum pulvinar massa ac imperdiet. Nulla faucibus euismod efficitur. Sed vitae est ipsum. Phasellus cursus mollis felis, a pulvinar ex commodo vel. Aliquam tincidunt maximus erat ac rhoncus. Etiam diam lectus, pellentesque eget mauris ut, sagittis vehicula magna. Curabitur malesuada fermentum ornare. Integer fringilla sapien quis turpis volutpat, mattis fermentum erat placerat. Vestibulum aliquam eros ac quam condimentum, a eleifend velit vehicula. Vivamus dolor arcu, dictum a libero consequat, posuere condimentum massa.
            </p>

            {postType === PostType.ARTICLE && <p className="date">Source: www.google.com</p>}
        </div>
    )
}

export default Post;