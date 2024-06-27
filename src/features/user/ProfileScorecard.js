import { Card, Stack, Typography, Divider } from "@mui/material";
import { fNumber } from "../../utils/numberFormat";

// 1st show how many posts and friends
function ProfileScorecard({ profile }) {
  const { postCount, friendCount } = profile; ///////////////////////???????????????

  // show how many friends and posts
  return (
    <>
      <Card
        sx={{
          p: 2,
          minWidth: "200px",
          minHeight: "250px",
          lineHeight: "1",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          alignDirection="center"
          lineHeight={1}
          divider={<Divider orientation="vertical" flexItem />}
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
