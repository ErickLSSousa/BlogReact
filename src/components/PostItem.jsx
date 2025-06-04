import { Link } from "react-router-dom";
import 

function PostItem({ post, autor }) {
    return (<li>
        <link to={`/post/${post.id}`}>
            <h2>{post.title}</h2>
            <p>Autor: {autor}</p>
        </link>
    </li>
    );
}

export default PostItem