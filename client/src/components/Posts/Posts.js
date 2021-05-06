import React from 'react';
import Post from './Post/Post';
import makeStyles from './styles';
import { useSelector } from 'react-redux';

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  const classes = makeStyles();

  console.log(posts);

  return (
    <div>
      <Post />
      <Post />
    </div>
  );
}
