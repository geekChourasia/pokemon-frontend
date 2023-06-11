import "./App.css";
import React, { useState, useEffect } from "react";
import { Typography, Box, TextField, Card } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";

function App() {
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 380,
      color:
        theme.palette.mode === "light"
          ? "rgb(55, 65, 81)"
          : theme.palette.grey[300],
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [data, setData] = useState([]);
  // const [filteredData,setFilteredData]=useState([]);
  // const[searchTerm,setSearchTerm]=useState("");

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  //     .catch((err) => console.error(err));
  // });

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>setData(data))
    // fetchData();

  },[])

  // const fetchData=async()=>{
  //   try{
  //     const response=await fetch(	"https://dummy.restapiexample.com/api/v1/employees");
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   }catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }

  // const handleInputChange = event => {
  //   console.log(event);
  //   setSearchTerm(event.target.value);
    // filterData(event.target.value);
  // };

  console.log(data)



  // const filterData=searchTerm=>{
  //   const filtered=data.filter(item=> item.someProperty.toLowerCase().includes(searchTerm.toLowerCase()));
  //   setFilteredData(filtered)
  // }


  return (
    <div className="App">
      <Box style={{ padding: "20px" }}>
        <Typography
          variant="h3"
          component="h3"
          textAlign="start"
          color="#616161"
        >
          {"Pokemon "}
        </Typography>
      </Box>

      <Box
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#313131",
          zIndex: "-100",
          height: "25vh",
          paddingTop: "25px",
        }}
      >
        <Box>
          <Box display="flex" flexDirection="column">
            <Typography
              variant="h4"
              component="h5"
              style={{ textAlign: "start", color: "white" }}
            >
              {" Name or Number "}
            </Typography>
            <Box display="flex" alignItems="center">
              <TextField
                style={{
                  width: "30vw",
                  backgroundColor: "white",
                  borderRadius: "4px",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
                type="text"
                // value={searchTerm} 
                // onChange={handleInputChange}

                id="outlined-basic"
                // size="small"
                label=""
                variant="outlined"
              />

              <Card
                style={{
                  marginLeft: "10px",
                  cursor: "pointer",
                  backgroundColor: "#ee6d3b",
                  zIndex: 100,
                  width: "60px",
                  height: "56px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SearchIcon style={{ fontSize: "46px", color: "white" }} />
              </Card>
            </Box>
            <Typography
              style={{ fontSize: "16px", textAlign: "start", color: "white" }}
            >
              {" "}
              Use the Advanced Search to explore Pokemon by type,
            </Typography>
            <Typography
              style={{ fontSize: "16px", textAlign: "start", color: "white" }}
            >
              weakness,Ability, and more!{" "}
            </Typography>
            {/* e33d38*/}
          </Box>
        </Box>

        <Box>
          <Card
            style={{
              backgroundColor: "#4DAD5C",
              color: "white",
              height: "7vh",
              padding: "5%",
              width: "30vw",
              display: "flex",
              margin: "20px",
              flexDirection: "column",
            }}
          >
            <Typography style={{ fontSize: "18px", textAlign: "start" }}>
              {" Search for the Pokemon by the name or using its"}
              <br />
              <Typography style={{ fontSize: "18px", textAlign: "start" }}>
                National Pokedex number
              </Typography>
            </Typography>
          </Card>
        </Box>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        style={{ backgroundColor: "#616161", height: "8vh" }}
      >
        <Typography variant="h6" style={{ color: "white", marginRight: "5px" }}>
          Show Advanced Search{" "}
        </Typography>
        <ExpandCircleDownIcon style={{ color: "white", cursor: "pointer" }} />
      </Box>

      <Box
        display="flex"
        justifyContent="space-around"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <Box>
          <Card
            style={{
              backgroundColor: "#30A8D7",
              display: "flex",
              width: "30vw",
              height: "7vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <AutorenewIcon style={{ color: "white", fontSize: "30px" }} />
            </Box>
            <Typography style={{ color: "white", fontSize: "24px" }}>
              Surprise Me!
            </Typography>
          </Card>
        </Box>

        <Box>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography
              style={{
                fontSize: "28px",
                color: "#a4a4a4",
                marginRight: "10px",
              }}
            >
              Sort By
            </Typography>
            <Button
              startIcon={
                <CatchingPokemonTwoToneIcon
                  style={{ color: "white", fontSize: "30px" }}
                />
              }
              style={{
                backgroundColor: "black",
                width: "30vw",
                height: "7vh",
                fontSize: "18px",
                textAlign: "start",
              }}
              id="demo-customized-button"
              aria-controls={open ? "demo-customized-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={
                <KeyboardArrowDownIcon
                  style={{ color: "white", fontSize: "30px" }}
                />
              }
            >
              Lowest Number (First)
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                "aria-labelledby": "demo-customized-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} disableRipple>
                Lowest Number (First)
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                {/* <FileCopyIcon /> */}
                Highest Number (First)
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                A-Z
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                Z-A
              </MenuItem>
            </StyledMenu>
          </div>
        </Box>
      </Box>

      <Box style={{ margin: "5%" }}>
        <Box style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
          {data.map((item) => (
            <Box style={{ width: "250px", height: "auto" }}>
              <Card
                style={{
                  backgroundColor: "#f2f2f2",
                  width: "250px",
                  height: "250px",
                }}
                variant="outlined"
              ></Card>
              <Typography
                style={{
                  fontWeight: "bold",
                  color: "#a4a4a4",
                  textAlign: "start",
                }}
              >
                {item.id}
              </Typography>
              <Typography
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  textAlign: "start",
                }}
              >
                {item.data}
              </Typography>

              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
              >
                <Card
                  variant="contained"
                  style={{
                    backgroundColor: "#9CCC50",
                    width: "120px",
                    height: "20px",
                  }}
                >
                  Grass
                </Card>

                <Card
                  variant="contained"
                  style={{
                    backgroundColor: "#ba7fc9",
                    width: "120px",
                    height: "20px",
                    color: "white",
                  }}
                >
                  Poison
                </Card>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default App;
