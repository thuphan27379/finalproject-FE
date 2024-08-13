import { Card, Stack, Typography, Divider } from "@mui/material";
import { fNumber } from "../../utils/numberFormat";

// 1st show how many posts and friends
function ProfileScorecard({ profile }) {
  const { postCount, friendCount } = profile;

  //
  return (
    <>
      <Card
        style={{ border: "1px solid #0A3161", borderRadius: "3px" }}
        sx={{
          p: 1,
          marginLeft: "2px",
          minWidth: "150px",
          minHeight: "255px",
          lineHeight: "1",
          alignItems: "center",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          lineHeight={1}
          divider={
            <Divider
              style={{ background: "#0A3161" }}
              orientation="vertical"
              flexItem
            />
          }
        >
          <Stack width={1} textAlign="center">
            <Typography variant="h4">{fNumber(friendCount)}</Typography>
            <Typography variant="body4">Friends</Typography>
          </Stack>

          <Stack width={1} textAlign="center">
            <Typography variant="h4">{fNumber(postCount)}</Typography>
            <Typography variant="body4">Posts</Typography>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}

export default ProfileScorecard;
