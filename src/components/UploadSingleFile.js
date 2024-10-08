import { useDropzone } from "react-dropzone";
import isString from "lodash/isString";
import { styled } from "@mui/material/styles";
import { Box, Stack, Typography } from "@mui/material";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import RejectionFiles from "./RejectionFiles";

// drag & drop image file
const DropZoneStyle = styled("div")(({ theme }) => ({
  outline: "none",
  overflow: "hidden",
  position: "relative",
  height: 80,
  padding: theme.spacing(3, 1),
  transition: theme.transitions.create("padding"),

  borderRadius: theme.shape.borderRadius,
  border: `1px dashed #B31942`,
  "&:hover": { opacity: 0.72, cursor: "pointer" },
}));

//
function UploadSingleFile({ error = false, file, helperText, sx, ...other }) {
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
      <Box sx={{ width: "100%", ...sx }}>
        <DropZoneStyle
          {...getRootProps()}
          sx={{
            ...(isDragActive && { opacity: 0.72 }),
            ...((isDragReject || error) && {
              color: "error.main",
              borderColor: "error.light",
              bgcolor: "error.lighter",
            }),
            ...(file && {
              padding: "5% 0",
            }),
          }}
        >
          <input {...getInputProps()} />

          <Stack
            direction="column"
            spacing={2}
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100%" }}
          >
            <AddAPhotoOutlinedIcon sx={{ color: "#B31942" }} />
            <Typography
              gutterBottom
              variant="body2"
              sx={{ color: "#B31942" }}
              textAlign="center"
            >
              Drag 'n' Drop Image
            </Typography>
          </Stack>

          {/* review the image */}
          {file && (
            <Box
              sx={{
                top: 8,
                left: 8,
                borderRadius: 1,
                position: "absolute",
                width: "calc(100% - 16px)",
                height: "calc(100% - 16px)",
                overflow: "hidden",
                "& img": { objectFit: "cover", width: 1, height: 1 },
              }}
            >
              <img
                alt="file preview"
                src={isString(file) ? file : file.preview}
              />
            </Box>
          )}
        </DropZoneStyle>

        {/* error */}
        {fileRejections.length > 0 && (
          <RejectionFiles fileRejections={fileRejections} />
        )}

        {helperText && helperText}
      </Box>
    </>
  );
}

export default UploadSingleFile;
