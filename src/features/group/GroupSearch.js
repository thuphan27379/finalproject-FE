import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  Stack,
  Typography,
  // CardHeader,
  Box,
  Button,
} from "@mui/material";

import SearchInput from "../../components/SearchInput";
import { getSearchGroup } from "./groupSlice";

// 1st card: SEARCH FOR GROUP by name/interest
function GroupSearch() {
  const [filterGroup, setFilterGroup] = useState("");
  const [page, setPage] = React.useState(0);
  const dispatch = useDispatch();

  // input
  const handleSubmit = (e) => {
    setFilterGroup(e);
    // console.log(e);
  };

  // ?
  const { searchGroupResult } = useSelector((state) => state.group);
  // console.log(searchGroupResult);

  // dispatch
  useEffect(() => {
    if (filterGroup) {
      dispatch(getSearchGroup({ filterGroup, page: page + 1 }));
    }
  }, [filterGroup, page, dispatch]);

  //
  return (
    <>
      <Card
        style={{ border: "1px solid #c0d9f9", borderRadius: "3px" }}
        sx={{
          p: 2,
          minWidth: "360px",
          minHeight: "250px",
          lineHeight: "2",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "10px",
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
            {/* result count */}
            {/* if (searchGroupResult) */}
            <Typography
              variant="subtitle"
              sx={{ color: "text.secondary", ml: 1 }}
            >
              {searchGroupResult?.length > 1
                ? `${searchGroupResult?.length} groups found`
                : searchGroupResult?.length === 1
                ? `${searchGroupResult?.length} group found`
                : "No group found"}
            </Typography>

            {/* pagination */}

            {/* show search result here */}
            {/* click on to show group name, group post */}
            <Stack spacing={1} sx={{ p: 2 }}>
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
                  <Typography key={result._id}>* {result.name}</Typography>

                  <Button
                    color="secondary"
                    variant="outlined"
                    sx={{ p: 0, fontSize: 10 }}
                    // onClick={handleJoin()}
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
