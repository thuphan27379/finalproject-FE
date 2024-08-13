import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { Box, Typography } from "@mui/material";

import PostCard from "../post/PostCard";
import { getPostsGroup } from "./groupSlice";
import useAuth from "../../hooks/useAuth";

// new feed of group, list of post of the group
function GroupPostList() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const params = useParams();
  const groupId = params.groupId;
  const { user } = useAuth();

  const { groupPostsList, postsByGroupId, totalPostsGroup, isLoading } =
    useSelector((state) => state.group); // groupSlice

  // console.log(groupPostsList);

  useEffect(() => {
    dispatch(getPostsGroup({ groupId, page }));
  }, [dispatch, groupId, page]);

  // lay postsByGroupId
  return (
    <>
      {groupPostsList.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}

      {/* load more btn ?*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "20px",
          paddingTop: "5px",
        }}
      >
        {totalPostsGroup ? (
          // k load more
          <LoadingButton
            variant="contained"
            size="small"
            color="secondary"
            loading={isLoading}
            onClick={() => setPage((page) => page + 1)}
            disabled={
              Boolean(totalPostsGroup) &&
              groupPostsList.length >= totalPostsGroup
            }
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

export default GroupPostList;
