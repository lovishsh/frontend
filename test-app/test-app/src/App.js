import {
  Box,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../src/assets/logo.png";
import coins from "../src/assets/image 4.png";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import notification from "../src/assets/Vector.png";
import avatar from "../src/assets/Ellipse 1.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import searchIcon from "../src/assets/Vector (1).png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function App() {
  const todayAttendance = [
    {
      name: "Lovish jha",
      clockIn: "9:30AM",
      clockOut: "7:30PM",
      status: "Present",
    },
    {
      name: "Avanish jha",
      clockIn: "9:30AM",
      clockOut: "7:30PM",
      status: "Present",
    },
    {
      name: "Ankit Sharma",
      clockIn: "",
      clockOut: "",
      status: "Absent",
    },
    {
      name: "Rohit soni",
      clockIn: "",
      clockOut: "",
      status: "Leave",
    },
  ];
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <Grid container>
          <Grid item xs={12} sm={12} md={9}>
            <Box sx={{ width: "50px", height: "50px" }}>
              <img src={logo} alt="logo" />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "lightYellow",
                borderRadius: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "2px",
                border: "1px solid #F3C41A",
                color: "#F3C41A",
                width: "150px",
              }}
            >
              <Typography variant="h6" sx={{ marginRight: "18px" }}>
                100 coins
              </Typography>{" "}
              <img src={coins} height={20} width={20} alt="coins" />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                width: "50px",
                height: "50px",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "24px",
                  height: "24px",
                }}
              >
                <img
                  src={notification}
                  sx={{ width: "100%", height: "auto" }}
                  alt="notification"
                />
                <FiberManualRecordIcon
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    height: "10px",
                    width: "10px",
                    color: "green",
                  }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={avatar} width={40} height={40} />
              <ExpandMoreIcon />
            </Box>
          </Grid>
        </Grid>
        <Divider />
      </Grid>

      <Grid item xs={12} sm={12} md={12}>
        <Grid container spacing={2} sx={{ padding: "10px" }}>
          <Grid item xs={12} sm={6} md={2.4}>
            <Box
              sx={{
                border: "1px solid #D6D6D6",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                width: "200px",
                height: "100px",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                160
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "8px",
                }}
              >
                <Typography variant="h6" sx={{ marginRight: "16px" }}>
                  Total WorkForce
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <Box
              sx={{
                border: "1px solid #D6D6D6",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                width: "200px",
                height: "100px",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                10
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "8px",
                }}
              >
                <Typography variant="h6" sx={{ marginRight: "16px" }}>
                  Absent | Today
                </Typography>
                <InfoIcon />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <Box
              sx={{
                border: "1px solid #D6D6D6",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                width: "200px",
                height: "100px",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                10
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "8px",
                }}
              >
                <Typography variant="h6" sx={{ marginRight: "16px" }}>
                  Present | Today
                </Typography>
                <InfoIcon />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <Box
              sx={{
                border: "1px solid #D6D6D6",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                width: "200px",
                height: "100px",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                65
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "8px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ marginRight: "16px", color: "#CA0000" }}
                >
                  Late/AWOL
                </Typography>
                <InfoIcon />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2.4}>
            <Box
              sx={{
                border: "1px solid #D6D6D6",
                borderRadius: "5px",
                display: "flex",
                flexDirection: "column",
                padding: "16px",
                width: "200px",
                height: "100px",
                justifyContent: "center",
                backgroundColor: "#FFFFFF",
              }}
            >
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                65
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "8px",
                }}
              >
                <Typography variant="h6" sx={{ marginRight: "16px" }}>
                  On Leave
                </Typography>
                <InfoIcon />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={5}>
        <Grid
          container
          sx={{ border: "1px solid #EFE5E5", borderRadius: "5px" }}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "5px",
              }}
            >
              <Typography variant="h5">Today Attendance</Typography>
              <Box
                sx={{
                  backgroundColor: "#C738DE",
                  width: "100px",
                  height: "40px",
                  fontSize: "20px",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "25px",
                }}
              >
                30 March
              </Box>
            </Box>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={12} md={12} m={1}>
            <TextField
              // label="Quick Search ..."
              id="outlined-start-adornment"
              placeholder="Quick Search ..."
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src={searchIcon}></img>
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} m={1}>
            {todayAttendance.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  borderRadius: "7px",
                  border: "1px solid #E2E2E2",
                  padding: "7px 0px",
                }}
              >
                <Typography>Aman Sindal</Typography>
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center ",
                  }}
                >
                  <ArrowForwardIcon sx={{ color: "green" }} /> 10:30 AM
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center ",
                  }}
                >
                  <ArrowBackIcon sx={{ color: "red" }} /> 7:30 PM
                </Box>
                <Box
                  sx={{
                    backgroundColor: "green",
                    height: "30px",
                    width: "30px",
                    borderRadius: "50%",
                    textAlign: "center",
                    alignContent: "center",
                  }}
                >
                  P
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
