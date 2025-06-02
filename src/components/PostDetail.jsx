import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPost, fetchUser } from '../serviços/api';

function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    async function loadDetails() {
      const postData = await fetchPost(id);
      setPost(postData);
      const userData = await fetchUser(postData.userId);
      setAuthor(userData);
    }
    loadDetails();
  }, [id]);

  if (!post || !author) return <p>Carregando...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <h3>Autor: {autor.name}</h3>
      <p>Email: {autor.email}</p>
    </div>
  );
}

export default PostPage;