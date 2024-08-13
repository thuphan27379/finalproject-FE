import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  Typography,
  CardHeader,
  Stack,
  Box,
} from "@mui/material";

import { getList } from "./groupSlice";

// 3rd card: show interest list
function GroupInterest() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { list } = useSelector((state) => state.group);
  // console.log(list);

  useEffect(() => {
    dispatch(getList({ page }));
  }, [dispatch, page]);

  //
  return (
    <>
      <Card
        style={{ border: "1px solid #0A3161", borderRadius: "3px" }}
        sx={{ minWidth: "313px", minHeight: "250px" }}
      >
        <CardHeader title="List of Interest" sx={{ paddingTop: "10px" }} />

        {/* pagination */}

        <Stack spacing={1} sx={{ p: 2 }}>
          {list.map((listItem) => (
            <Box
              key={listItem._id}
              sx={{
                p: 0,
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-between",
              }}
            >
              <Typography>* {listItem.interests}</Typography>
              <Button
                color="secondary"
                variant="contained"
                sx={{ p: 0, fontSize: 10 }}
              >
                See
              </Button>
            </Box>
          ))}
        </Stack>
      </Card>
    </>
  );
}

export default GroupInterest;
