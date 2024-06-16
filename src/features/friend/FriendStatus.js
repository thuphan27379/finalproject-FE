import React from "react";
import { Chip } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import PauseCircleOutlineRoundedIcon from "@mui/icons-material/PauseCircleOutlineRounded";
import MarkEmailReadRoundedIcon from "@mui/icons-material/MarkEmailReadRounded";
import DoNotDisturbAltRoundedIcon from "@mui/icons-material/DoNotDisturbAltRounded";

// Friend Status chip (notify btn of status in MUI)
function FriendStatus({ currentUserId, targetUserId, friendship, sx }) {
  if (currentUserId === targetUserId) return null;
  if (!friendship) return null;

  // accepted
  if (friendship.status === "accepted") {
    return (
      <Chip
        sx={{ ...sx }}
        icon={<CheckCircleOutlineRoundedIcon />}
        label="Friend"
        color="success"
        variant="outlined"
      />
    );
  }

  // declined
  if (friendship.status === "declined") {
    return (
      <Chip
        sx={{ ...sx }}
        icon={<DoNotDisturbAltRoundedIcon />}
        label="Declined"
        color="error"
        variant="outlined"
      />
    );
  }

  // pending
  if (friendship.status === "pending") {
    const { from, to } = friendship;
    if (from === currentUserId && to === targetUserId) {
      return (
        <Chip
          sx={{ ...sx }}
          icon={<MarkEmailReadRoundedIcon />}
          label="Request sent"
          color="warning"
          variant="outlined"
        />
      );
    } else if (from === targetUserId && to === currentUserId) {
      return (
        <Chip
          sx={{ ...sx }}
          icon={<PauseCircleOutlineRoundedIcon />}
          label="Waiting for response"
          color="warning"
          variant="outlined"
        />
      );
    }
  }

  // null : without friend status
  return null;
}

export default FriendStatus;
