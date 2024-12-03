import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import EastIcon from "@mui/icons-material/East";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      alignItems: "center",
      borderTop: "1px solid rgba(255,255,255,0.25)",
      color: "grey",
      backgroundColor: "rgba(33,36,40,1)",
      paddingTop: "50px",
    }}
  >
    <Container maxWidth="lg">
      <Grid container spacing={10}>
        <Grid item md={3} sm={6} xs={6}>
          <Box
            sx={{ marginBottom: "25px", marginLeft: { md: 3, sm: 6, xs: 3 } }}
          >
            <Typography
              variant="h5"
              component="h5"
              sx={{ color: "white", fontWeight: 800 }}
            >
              Newsletter
            </Typography>
            <Box
              component="p"
              sx={{
                color: "grey",
              }}
            >
              Sign up to our newsletter.
            </Box>
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                alignText: "center",
                width: 200,
                height: 30,
                backgroundColor: "rgba(60, 63, 63 ,1)",
                borderRadius: "12px",
              }}
            >
              <IconButton
                sx={{
                  p: "10px",
                  color: "white",
                  "&:disabled": {
                    cursor: "default",
                    color: "#fff",
                  },
                  "&:hover": {
                    color: "#fff",
                  },
                }}
                aria-label="menu"
                disabled
              >
                <EmailIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1, fontSize: "12px", color: "white" }}
                placeholder="Enter Your Email..."
                inputProps={{ "aria-label": "Enter Your Email..." }}
              />
              <IconButton
                type="button"
                sx={{
                  right: "0px",
                  p: "3px",
                  color: "white",
                  backgroundColor: "rgba(255, 50, 63 ,1)",
                  borderRadius: "2px",
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "rgba(255, 50, 63 ,1)",
                    borderRadius: "1px",
                  },
                }}
                aria-label="search"
              >
                <EastIcon sx={{ width: 32 }} />
              </IconButton>
            </Paper>
          </Box>
        </Grid>
        <Grid item md={3} sm={6}>
          <Box
            sx={{ marginBottom: "25px", marginLeft: { md: 3, sm: 6, xs: 3 } }}
          >
            <Typography
              variant="h5"
              component="h5"
              sx={{ color: "white", fontWeight: 800 }}
            >
              Marketplace
            </Typography>
            <List>
              <ListItem disablePadding>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "grey",
                    cursor: "pointer",
                    "&:hover": {
                      cursor: "pointer",
                      color: "#fff",
                    },
                  }}
                  to=""
                >
                  <ListItemText primary="All NFTs" />
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "grey",
                    cursor: "pointer",
                    "&:hover": {
                      cursor: "pointer",
                      color: "#fff",
                    },
                  }}
                  to=""
                >
                  <ListItemText primary="Art" />
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "grey",
                    cursor: "pointer",
                    "&:hover": {
                      cursor: "pointer",
                      color: "#fff",
                    },
                  }}
                  to=""
                >
                  <ListItemText primary="Collectibles" />
                </Link>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item md={3} sm={6}>
          <Box
            sx={{ marginBottom: "25px", marginLeft: { md: 3, sm: 6, xs: 3 } }}
          >
            <Typography
              variant="h5"
              component="h5"
              sx={{ color: "white", fontWeight: 800 }}
            >
              Resources
            </Typography>
            <List>
              <ListItem disablePadding>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "grey",
                    cursor: "pointer",
                    "&:hover": {
                      cursor: "pointer",
                      color: "#fff",
                    },
                  }}
                  to=""
                >
                  <ListItemText primary="Help Center" />
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "grey",
                    cursor: "pointer",
                    "&:hover": {
                      cursor: "pointer",
                      color: "#fff",
                    },
                  }}
                  to=""
                >
                  <ListItemText primary="Discord" />
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "grey",
                    cursor: "pointer",
                    "&:hover": {
                      cursor: "pointer",
                      color: "#fff",
                    },
                  }}
                  to=""
                >
                  <ListItemText primary="Docs" />
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "grey",
                    cursor: "pointer",
                    "&:hover": {
                      cursor: "pointer",
                      color: "#fff",
                    },
                  }}
                  to=""
                >
                  <ListItemText primary="Newsletter" />
                </Link>
              </ListItem>
            </List>
          </Box>
        </Grid>
        <Grid item md={3} sm={6}>
          <Box
            sx={{ marginBottom: "25px", marginLeft: { md: 3, sm: 6, xs: 3 } }}
          >
            <Typography
              variant="h5"
              component="h5"
              sx={{ color: "white", fontWeight: 800 }}
            >
              Community
            </Typography>
            <List>
              <ListItem disablePadding>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "grey",
                    cursor: "pointer",
                    "&:hover": {
                      cursor: "pointer",
                      color: "#fff",
                    },
                  }}
                  to=""
                >
                  <ListItemText primary="Community" />
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "grey",
                    cursor: "pointer",
                    "&:hover": {
                      cursor: "pointer",
                      color: "#fff",
                    },
                  }}
                  to=""
                >
                  <ListItemText primary="Documentation" />
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link
                  sx={{
                    textDecoration: "none",
                    color: "grey",
                    cursor: "pointer",
                    "&:hover": {
                      cursor: "pointer",
                      color: "#fff",
                    },
                  }}
                  to=""
                >
                  <ListItemText primary="Blog" />
                </Link>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Container>
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid rgba(255,255,255,0.25)",
        color: "grey",
        backgroundColor: "rgba(33,36,40,1)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ paddingTop: "20px", paddingBottom: "7px" }}
      >
        <Grid
          container
          spacing={5}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px",
            marginLeft: -2,
          }}
        >
          <Grid item md={3} sm={6} xs={6}>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              {/*TODO:insert logo here*/}
              <Box component="span" sx={{ width: "1400px" }}>
                2022 &copy; Moerphous
              </Box>
            </Box>
          </Grid>
          <Grid item md={3} sm={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginLeft: { xs: "20px", md: "60px", sm: "60px" },
                marginRight: { xs: "20px" },
              }}
            >
              <IconButton
                onClick={() => window.open("", "_self")}
                sx={{
                  cursor: "pointer",
                  p: "10px",
                  color: "white",
                  backgroundColor: "rgba(60, 63, 63 ,1)",
                  borderRadius: "2px",
                  marginRight: "10px",
                  "&:hover": {
                    cursor: "pointer",
                    color: "#000",
                    backgroundColor: "#fff",
                  },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                onClick={() => window.open("", "_self")}
                sx={{
                  cursor: "pointer",
                  p: "10px",
                  color: "white",
                  backgroundColor: "rgba(60, 63, 63 ,1)",
                  borderRadius: "2px",
                  "&:hover": {
                    cursor: "pointer",
                    color: "#000",
                    backgroundColor: "#fff",
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </Box>
);

export default Footer;
