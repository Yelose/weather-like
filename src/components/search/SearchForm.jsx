import {
  Button,
  TextField,
  ButtonGroup,
  Box,
  Toolbar,
  Typography,
} from "@mui/material";

import TravelExploreIcon from "@mui/icons-material/TravelExplore";

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
    <>
      <form className="search-form">
        <TextField id="filled-basic" label="City Name" variant="filled" />
        <TextField id="filled-basic" label="Post Code" variant="filled" />
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
      </form>
      <section className="last-search-items">
        <Box
          sx={{
            backgroundColor: "primary.dark",
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
      </section>
    </>
  );
}
