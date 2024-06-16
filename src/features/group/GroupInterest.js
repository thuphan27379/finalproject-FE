import { styled } from "@mui/material/styles";
import { Link, Card, CardHeader, Stack, Box } from "@mui/material";

// 3rd a card show info about interest list, on the left
function GroupInterest() {
  // const {interest} = internet

  //
  return (
    <>
      <Card sx={{ minWidth: "300px", minHeight: "250px" }}>
        <CardHeader title="List of Interest" sx={{ paddingTop: "10px" }} />
        <Stack spacing={2} sx={{ p: 2 }}>
          {/* {SOCIALS.map((link) => (
            <Stack key={link.name} direction="row" alignItems="center">
              {link.icon}
              <Link
                component="span"
                variant="body2"
                color="text.primary"
                noWrap
              >
                {link.href}
              </Link>
            </Stack>
          ))} */}
        </Stack>
      </Card>
    </>
  );
}

export default GroupInterest;
