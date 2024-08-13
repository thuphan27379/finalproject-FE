import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Typography, Container } from "@mui/material";

// blank layout
function NotFoundPage() {
  //
  return (
    <>
      <Container
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "center",
          padding: 0,
          margin: 0,
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            width: 480,
            margin: "auto",
            padding: "auto",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "center",
          }}
        >
          <Typography variant="h4" paragraph>
            Page not found!
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: "1rem" }}>
            Sorry, we couldn’t find the page you requested.
          </Typography>
          <Button
            to="/"
            variant="contained"
            component={RouterLink}
            color="secondary"
          >
            Go to Home
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default NotFoundPage;
