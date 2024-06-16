import { styled } from "@mui/material/styles"; //* icon */
import { Link, Card, Typography, CardHeader, Stack, Box } from "@mui/material";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import Profile from "C:/Users/Public/finalproject-frontend/src/features/user/Profile.js";

//* icon */
const IconStyle = styled(Box)(({ theme }) => ({
  width: 20,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2),
}));

// 2nd About
// show detail of profile, on the left
function ProfileAbout({ profile }) {
  const { aboutMe, city, country, email, company } = profile;

  //
  return (
    <>
      <Card sx={{ minWidth: "350px", minHeight: "246px" }}>
        <CardHeader title="About" variant="h6" sx={{ paddingTop: "10px" }} />

        <Stack spacing={2} sx={{ p: 2 }}>
          <Stack direction="row">
            <IconStyle color="##19b38a">
              <SelfImprovementIcon />
            </IconStyle>
            <Typography variant="body2" alignItems="center">
              {aboutMe}
            </Typography>
          </Stack>

          <Stack direction="row">
            <IconStyle color="##19b38a">
              <PinDropOutlinedIcon />
            </IconStyle>
            <Typography variant="body2">
              <Link component="span" variant="subtitle2" color="text.primary">
                {city}, {country}.
              </Link>
            </Typography>
          </Stack>

          <Stack direction="row">
            <IconStyle color="##19b38a">
              <EmailOutlinedIcon />
            </IconStyle>
            <Typography variant="body2">{email}</Typography>
          </Stack>

          <Stack direction="row">
            <IconStyle color="##19b38a">
              <BusinessCenterOutlinedIcon />
            </IconStyle>
            <Typography variant="body2">
              <Link component="span" variant="subtitle2" color="text.primary">
                {company}
              </Link>
            </Typography>
          </Stack>

          <Stack direction="row">
            <IconStyle color="##98002e">
              <FavoriteBorderOutlinedIcon />
            </IconStyle>
            <Typography variant="body2">Others</Typography>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}

export default ProfileAbout;
