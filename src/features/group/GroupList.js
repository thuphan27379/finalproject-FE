import { styled } from "@mui/material/styles"; //* icon */
import { Link, Card, Typography, CardHeader, Stack, Box } from "@mui/material";

// 2nd card: list of group
function ProfileAbout() {
  //
  return (
    <>
      <Card sx={{ minWidth: "350px", minHeight: "246px" }}>
        <CardHeader
          title="List of Group"
          variant="h6"
          sx={{ paddingTop: "10px" }}
        />
        <Stack></Stack>
      </Card>
    </>
  );
}

export default ProfileAbout;
