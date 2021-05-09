import React from 'react';
import Post from './Post/Post';
import makeStyles from './styles';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

export default function Posts({ setcurrentId }) {
  const posts = useSelector((state) => state.posts);
  const classes = makeStyles();

  // console.log(posts[0], 'posts');

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid item key={post.id} xs={12} sm={6}>
          <Post post={post} setcurrentId={setcurrentId} />
          {/* {console.log(post.tags, 'post')} */}
        </Grid>
      ))}
    </Grid>
  );
}
