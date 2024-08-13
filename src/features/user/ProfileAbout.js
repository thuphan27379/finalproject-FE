import { styled } from "@mui/material/styles";
import { Link, Card, Typography, CardHeader, Stack, Box } from "@mui/material";
import PinDropOutlinedIcon from "@mui/icons-material/PinDropOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

// icon
const IconStyle = styled(Box)(({ theme }) => ({
  width: 20,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2),
}));

// 2nd show detail of profile
function ProfileAbout({ profile }) {
  const { aboutMe, city, country, email, company, others } = profile;

  //
  return (
    <>
      <Card
        style={{
          border: "1px solid #0A3161",
          borderRadius: "3px",
        }}
        sx={{ minWidth: "295px", minHeight: "255px" }}
      >
        {/* Portfolio */}
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
              <Link
                component="span"
                variant="subtitle2"
                color="text.primary"
                fontWeight="400"
              >
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
              <EmojiEventsOutlinedIcon />
            </IconStyle>
            <Typography variant="body2">
              <Link
                component="span"
                variant="subtitle2"
                color="text.primary"
                fontWeight="400"
              >
                {company}
              </Link>
            </Typography>
          </Stack>

          <Stack direction="row">
            <IconStyle color="##98002e">
              <FavoriteBorderOutlinedIcon />
            </IconStyle>
            <Typography variant="body2">{others}</Typography>
          </Stack>
        </Stack>
      </Card>
    </>
  );
}

export default ProfileAbout;
