import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";

import PostCard from "./post/PostCard";
import { getPostsGroup } from "./groupSlice";

// new feed of group
function GroupPostList({ userId, groupId }) {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { currentPagePosts, postsById, isLoading, totalPosts, postsByGroupId } =
    useSelector((state) => state.post); //postSlice
  const { currentPagePostsByGroup, groupPostsById, totalPostsGroup } =
    useSelector((state) => state.group); //groupSlice

  // lay nhung post trong data ra va loc theo groupId
  const posts = currentPagePosts.map((postId) => groupPostsById[postId]);
  const postsByGroup = currentPagePostsByGroup.map(
    (groupPostId) => postsByGroupId[groupPostId] // postsByGroup
  ); //?

  useEffect(() => {
    if (userId) dispatch(getPostsGroup({ userId, groupId, page }));
  }, [dispatch, userId, groupId, page]);

  // l?y postsByGroup
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
          // k load more dc
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

export default GroupPostList;
