import {
  Button,
  Link,
  Card,
  Typography,
  CardHeader,
  Stack,
  Box,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getList } from "./groupSlice";

// 3rd card: show interest list
function GroupInterest() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { list } = useSelector((state) => state.group);
  console.log(list);

  useEffect(() => {
    dispatch(getList({ page }));
  }, [dispatch, page]);

  //
  return (
    <>
      <Card sx={{ minWidth: "300px", minHeight: "250px" }}>
        <CardHeader title="List of Interest" sx={{ paddingTop: "10px" }} />

        {/* pagination */}

        <Stack spacing={2} sx={{ p: 2 }}>
          {list.map((listItem) => (
            <Box
              sx={{
                p: 0,
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "space-between",
              }}
            >
              <Typography>{listItem.interests}</Typography>
              <Button
                color="secondary"
                variant="outlined"
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
