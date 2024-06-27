import { LoadingButton } from "@mui/lab";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import PostCard from "./PostCard";
import { getPosts } from "./postSlice";

// new feed
function PostList({ userId }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { currentPagePosts, postsById, isLoading, totalPosts } = useSelector(
    (state) => state.post
  );

  // lay nhung post trong data ra
  const posts = currentPagePosts.map((postId) => postsById[postId]);

  useEffect(() => {
    if (userId) dispatch(getPosts({ userId, page }));
  }, [dispatch, userId, page]);

  //
  return (
    <>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}

      {/* load more btn */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        {totalPosts ? (
          <LoadingButton
            variant="outlined"
            size="small"
            color="secondary"
            loading={isLoading}
            onClick={() => setPage((page) => page + 1)}
            disabled={Boolean(totalPosts) && posts.length >= totalPosts}
          >
            Load more
          </LoadingButton>
        ) : (
          <Typography variant="h6">No Post Yet</Typography>
        )}
      </Box>
    </>
  );
}

export default PostList;
