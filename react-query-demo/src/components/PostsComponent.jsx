import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

const PostsComponent = () => {
    const { data: posts, isError, isLoading } = useQuery('posts', fetchPosts, {
        cacheTime: 1000 * 60 * 10, // 10 minutes
        staleTime: 1000 * 60 * 5, // 5 minutes
        refetchOnWindowFocus: true,
        keepPreviousData: true,
    });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>An error occurred: {isError.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;