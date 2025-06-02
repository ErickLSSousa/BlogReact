import PostItem from "./PostItem";

function PostList ({posts, GetAutorNome}) {
    return(
        <ul>
            {posts.map((post) => (
            <PostItem key = {post.id} post = {post} autor = {autor}></PostItem>
            ))}
        </ul>
    );
}

export default PostList
 