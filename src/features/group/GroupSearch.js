import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  Stack,
  Typography,
  Box,
  Button,
  Pagination,
} from "@mui/material";
import { toast } from "react-toastify";

import useAuth from "../../hooks/useAuth";
import SearchInput from "../../components/SearchInput";
import { getSearchGroup, joinGroup, getList } from "./groupSlice";

// 1st card: SEARCH FOR GROUP by name/interest
function GroupSearch({ groupId }) {
  const [filterGroup, setFilterGroup] = useState("");
  const [page, setPage] = React.useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth();
  const currentUserId = user._id;
  const params = useParams();
  const currentGroupId = params.groupId;
  const { list, totalGroups } = useSelector((state) => state.group);
  // console.log(list);

  // get input
  const handleSubmit = (e) => {
    setFilterGroup(e);
    // console.log(e);
  };

  // from BE
  const { searchGroupResult } = useSelector((state) => state.group);
  // console.log(searchGroupResult);

  // dispatch
  useEffect(() => {
    if (filterGroup) {
      dispatch(getSearchGroup({ filterGroup, page: page + 1 }));
    } else {
      // reset input search
    }
  }, [filterGroup, page, dispatch]);

  // navigate to groupPage /group/:groupId
  const handleNavigate = (groupId) => {
    navigate(`/group/${groupId}`); //?
  };

  // handleJoin
  const handleJoin = async (currentGroupId, currentUserId) => {
    try {
      dispatch(joinGroup({ currentGroupId, currentUserId }));
      toast.success("Join a group successfully");
      navigate(`/group/${groupId}`); //?
    } catch (error) {
      console.log("User already join");
    }
  };

  // pagination
  useEffect(() => {
    dispatch(getList({ page }));
  }, [dispatch, page]);

  //
  return (
    <>
      <Card
        fullWidth
        style={{ border: "1px solid #0A3161", borderRadius: "3px" }}
        sx={{
          p: 2,
          minHeight: "250px",
          lineHeight: "2",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "10px",
          width: "100%",
          marginLeft: "15px",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          lineHeight={2}
        >
          <Stack width={1} textAlign="center">
            {/* CardHeader */}
            <Typography variant="h6">Search & Join</Typography>
            {/* SEARCH Input*/}
            <SearchInput
              placeholder="Search by name or interest"
              handleSubmit={handleSubmit}
              minWidth="350px"
              sx={{
                "& .MuiInputBase-root .MuiOutlinedInput-root .MuiInputBase-colorPrimary .MuiInputBase-formControl .MuiInputBase-sizeSmall .MuiInputBase-adornedEnd .css-199d5a5-MuiInputBase-root-MuiOutlinedInput-root":
                  {
                    borderRadius: "4px",
                    paddingRight: "10px",
                    width: "300px",
                  }, //??
              }}
            />
            <Box
              sx={{
                // display: "flex",
                flexDirection: "row",
                // justifyContent: "space-between",
              }}
            >
              {/* result count */}
              {/* if (filterGroup) */}
              <Typography variant="subtitle" sx={{ color: "text.secondary" }}>
                {searchGroupResult?.length > 1
                  ? `${searchGroupResult?.length} groups found`
                  : searchGroupResult?.length === 1
                  ? `${searchGroupResult?.length} group found`
                  : "No group found"}
              </Typography>

              {/* pagination getSearchGroupList*/}
              {/* <Pagination
                flexDirection="flex-end"
                count={totalGroups}
                siblingCount={0} //...
                page={page}
                onChange={(e, page) => {
                  setPage(page);
                  dispatch(getList({ groupId, page }));
                }}
                sx={{
                  "& .css-1888ozn-MuiButtonBase-root-MuiPaginationItem-root": {
                    margin: 0,
                  },
                  flexDirection: "flex-end",
                }}
              /> */}
            </Box>

            {/* show search result here */}
            {/* click on to show group name, group post */}
            <Stack spacing={1} sx={{ p: 4 }}>
              {searchGroupResult?.map((result) => (
                <Box
                  sx={{
                    p: 0,
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    key={result._id}
                    onClick={() => {
                      handleNavigate(result._id);
                    }}
                  >
                    * {result.name}
                  </Typography>

                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{ p: 0, fontSize: 10 }}
                    onClick={() => handleJoin(result._id, currentUserId)}
                  >
                    Join
                  </Button>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}

export default GroupSearch;
