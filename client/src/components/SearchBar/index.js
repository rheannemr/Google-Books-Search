import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import './index.css';

function SearchBar({ onClick, onChange }) {
    const [formObject, setFormObject] = useState({})

     // Handles updating component state when the user types into the input field
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
      };

    return (
        <div id="searchbar">
            <TextField
                onChange={handleInputChange}
                type="text"
                style={{ margin: 8 }}
                placeholder="Search for a Book"
                margin="dense"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined">
            </TextField>
            <Button onClick={onClick} variant="contained" color="black" id="searchbutton">
                Search
            </Button>
        </div>
    )
};

export default SearchBar;