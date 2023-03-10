import {
  Button,
  TextField,
  ButtonGroup,
  Box,
  Toolbar,
  Typography,
  Grid,
} from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { Link } from "react-router-dom";
import { alignRight, centerAlign } from "../../styles/styles";

export default function SearchForm() {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "Paris",
    },
    {
      id: 3,
      title: "Madrid",
    },
    {
      id: 4,
      title: "Tokyo",
    },
    {
      id: 5,
      title: "Sydney",
    },
  ];
  return (
    <Grid container>
      <Grid item xs={12} sm={9} md={10} sx={centerAlign}>
        <form className="search-form">
          <TextField
            id="filled-basic"
            label="City Name"
            variant="filled"
            sx={{ backgroundColor: "rgba(240, 248, 255, 0.6)" }}
          />
          <TextField
            id="filled-basic"
            label="Post Code"
            variant="filled"
            sx={{ backgroundColor: "rgba(240, 248, 255, 0.6)" }}
          />
          <Link to="/detail">
            <Button
              type="submit"
              sx={{
                backgroundColor: "secondary.dark",
                "&:hover": {
                  backgroundColor: "secondary.main",
                  opacity: [0.9, 0.9, 0.9],
                },
              }}
              variant="contained"
            >
              Search
            </Button>
          </Link>
        </form>
      </Grid>
      <Grid item xs={12} sm={3} md={2} sx={alignRight}>
        <Box className="last-search-items">
          <Box
            sx={{
              backgroundColor: "secondary.dark",
              color: "white",
            }}
          >
            <Toolbar>
              <TravelExploreIcon fontSize="small" />
              <Typography component="div" sx={{ flexGrow: 1 }}>
                Last Searchs
              </Typography>
            </Toolbar>
          </Box>
          <ButtonGroup
            color="secondary"
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="text"
          >
            {cities.map((city) => (
              <Button color="secondary" key={city.id}>
                {city.title}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Grid>
    </Grid>
  );
}
