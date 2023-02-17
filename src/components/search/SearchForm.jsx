import { Button, TextField } from "@mui/material";

export default function SearchForm() {
  return (
    <form className="search-form">
      <TextField id="filled-basic" label="City Name" variant="filled" />
      <TextField id="filled-basic" label="Post Code" variant="filled" />
      <Button variant="contained">Search</Button>
    </form>
  );
}
