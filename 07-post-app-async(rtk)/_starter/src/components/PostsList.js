import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostThunkAPI } from '../store/slices/postSlice';

import SearchPost from './SearchPost';
import './Posts.css';

const PostsList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPostThunkAPI());
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <SearchPost />
      <div className='posts-list'>
        <h1>Total Posts : 0</h1>

        <div className='post-details'>
          {data.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostsList;
