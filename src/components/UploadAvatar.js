import React from "react";
import isString from "lodash/isString";
import { useDropzone } from "react-dropzone";
import { Typography, Box } from "@mui/material";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import { styled, alpha } from "@mui/material/styles";

import RejectionFiles from "./RejectionFiles";

//
const RootStyle = styled("div")(({ theme }) => ({
  width: 200,
  height: 200,
  margin: "auto",
  padding: theme.spacing(1),

  border: `1px dashed ${alpha("#b3198f", 0.32)}`,
  borderRadius: "50%",
  backgroundColor: "",
}));

const DropZoneStyle = styled("div")({
  zIndex: 0,
  width: "100%",
  height: "100%",
  outline: "none",
  display: "flex",
  overflow: "hidden",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  "& > *": { width: "100%", height: "100%" },

  borderRadius: "50%",
  "&:hover": {
    cursor: "pointer",
    "& .placeholder": {
      zIndex: 9,
    },
  },
});

const PlaceholderStyle = styled("div")(({ theme }) => ({
  display: "flex",
  position: "absolute",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#919EAB",
  transition: theme.transitions.create("opacity", {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  "&:hover": { opacity: 0.72 },
}));

//
function UploadAvatar({ error, file, helperText, sx, ...other }) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    multiple: false,
    ...other,
  });

  //
  return (
    <>
      <RootStyle
        sx={{
          ...((isDragReject || error) && {
            borderColor: "error.light",
          }),
          ...sx,
        }}
      >
        <DropZoneStyle
          {...getRootProps()}
          sx={{
            ...(isDragActive && { opacity: 0.72 }),
          }}
        >
          <input {...getInputProps()} />

          {file && (
            <Box
              sx={{
                zIndex: 8,
                overflow: "hidden",
                "& img": { objectFit: "cover", width: 1, height: 1 },
              }}
            >
              <img alt="" src={isString(file) ? file : file.preview} />
            </Box>
          )}

          {/* not have yet */}
          <PlaceholderStyle
            className="placeholder"
            sx={{
              ...(file && {
                opacity: 0,
                bgcolor: "PRIMARY.100",
                "&:hover": { opacity: 0.2 },
              }),
              ...((isDragReject || error) && {
                bgcolor: "error.lighter",
              }),
            }}
          >
            <AddAPhotoOutlinedIcon
              sx={{ width: 24, height: 24, mb: 1, color: " #B31942" }}
            />
            <Typography variant="caption" sx={{ color: "#fff" }}>
              {file ? "Update photo" : "Upload photo"}
            </Typography>
          </PlaceholderStyle>
        </DropZoneStyle>
      </RootStyle>

      {helperText && helperText}

      {fileRejections.length > 0 && (
        <RejectionFiles fileRejections={fileRejections} />
      )}
    </>
  );
}

export default UploadAvatar;
