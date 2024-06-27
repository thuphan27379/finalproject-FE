import { styled } from "@mui/material/styles";
import { Link, Card, CardHeader, Stack, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";

// 3rd show info about social link
const IconStyle = styled(Box)(({ theme }) => ({
  width: 20,
  height: 20,
  marginTop: 1,
  flexShrink: 0,
  marginRight: theme.spacing(2),
}));

//
function ProfileSocialInfo({ profile }) {
  const {
    facebookLink,
    instagramLink,
    linkedinLink,
    twitterLink,
    youtubeLink,
  } = profile;

  const SOCIALS = [
    {
      name: "Linkedin",
      icon: (
        <IconStyle color=" #0077B5">
          <LinkedInIcon sx={{ fontSize: 27 }} />
        </IconStyle>
      ),
      href: linkedinLink,
    },
    {
      name: "Twitter",
      icon: (
        <IconStyle color="	#1DA1F2">
          <XIcon />
        </IconStyle>
      ),
      href: twitterLink,
    },
    {
      name: "Facebook",
      icon: (
        <IconStyle color="#4267B2">
          <FacebookIcon sx={{ fontSize: 27 }} />
        </IconStyle>
      ),
      href: facebookLink,
    },
    {
      name: "Instagram",
      icon: (
        <IconStyle color="#d62976">
          <InstagramIcon />
        </IconStyle>
      ),
      href: instagramLink,
    },
    {
      name: "Youtube",
      icon: (
        <IconStyle color="#FF0000">
          <YouTubeIcon sx={{ fontSize: 27 }} />
        </IconStyle>
      ),
      href: youtubeLink,
    },
  ];

  //
  return (
    <>
      <Card sx={{ minWidth: "303px", minHeight: "250px" }}>
        <CardHeader variant="h6" title="Social" sx={{ paddingTop: "10px" }} />
        <Stack spacing={2} sx={{ p: 2 }}>
          {SOCIALS.map((link) => (
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
          ))}
        </Stack>
      </Card>
    </>
  );
}

export default ProfileSocialInfo;
