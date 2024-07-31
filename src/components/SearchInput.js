import React, { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// SearchInput
function SearchInput({ handleSubmit }) {
  // state
  const [searchQuery, setSearchQuery] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(searchQuery);
  };

  // border color, bg color, placeholderColor
  return (
    <>
      <form
        onSubmit={onSubmit}
        sx={{
          borderColor: " #B31942", // ?
          placeholderColor: "#fff", // ?
          backgroundColor: "#e8bac6",
        }}
      >
        <TextField
          value={searchQuery}
          placeholder="Search by name"
          onChange={(event) => setSearchQuery(event.target.value)}
          sx={{
            width: 300,
            borderColor: "#fff", // ?
            placeholderColor: "#fff", // ?
          }}
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{
                  borderColor: "#fff",
                  placeholderColor: "#fff",
                }}
              >
                <IconButton
                  type="submit"
                  color="primary"
                  aria-label="search by name"
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </>
  );
}

export default SearchInput;
