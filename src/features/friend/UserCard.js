import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Avatar, Box, Card, Typography, Link } from "@mui/material";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

import useAuth from "../../hooks/useAuth";
import ActionButton from "./ActionButton";

// list of friends
function UserCard({ profile }) {
  const { user } = useAuth();
  const currentUserId = user._id;
  const { _id: targetUserId, name, avatarUrl, email, friendship } = profile;

  const actionButton = (
    <ActionButton
      currentUserId={currentUserId}
      targetUserId={targetUserId}
      friendship={friendship}
    />
  );

  //
  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
        }}
        style={{
          border: "1px solid #0A3161",
          borderRadius: "3px",
        }}
      >
        <Avatar alt={name} src={avatarUrl} sx={{ width: 48, height: 48 }} />

        <Box
          sx={{
            flexGrow: 1,
            minWidth: 0,
            pl: 2,
            pr: 1,
          }}
        >
          <Link
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              "& .css-skr1o3-MuiTypography-root-MuiLink-root .css-142n4nt-MuiTypography-root-MuiLink-root .css-p65y6e-MuiTypography-root-MuiLink-root":
                { color: "#fff" }, // ?
            }}
            component={RouterLink}
            to={`/user/${targetUserId}`}
          >
            {name}
          </Link>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <EmailRoundedIcon
              sx={{ width: 16, height: 16, mr: 0.5, flexShrink: 0 }}
            />
            <Typography variant="body2" sx={{ color: "#fff" }} noWrap>
              {email}
            </Typography>
          </Box>
        </Box>
        {actionButton}
      </Card>
    </>
  );
}

export default UserCard;
