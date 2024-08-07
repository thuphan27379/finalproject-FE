import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";

import PostCard from "./PostCard";
import { getAllPosts } from "./postSlice";

// wall
function PostListWall() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { currentPagePosts, postsById, isLoading, totalPosts } = useSelector(
    (state) => state.post
  );

  // lay nhung post trong data ra
  const posts = currentPagePosts.map((postId) => postsById[postId]);

  useEffect(() => {
    dispatch(getAllPosts({ page }));
  }, [dispatch, page]);

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
          paddingTop: "5px",
        }}
      >
        {totalPosts ? (
          <LoadingButton
            variant="contained"
            size="small"
            color="secondary"
            loading={isLoading}
            onClick={() => setPage((page) => page + 1)}
            disabled={Boolean(totalPosts) && posts.length >= totalPosts}
          >
            Load more
          </LoadingButton>
        ) : (
          <Typography variant="h6" color="secondary">
            No Post Yet
          </Typography>
        )}
      </Box>
    </>
  );
}

export default PostListWall;
