import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';


function Navbar() {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                   CRUD
                </Typography>
                <Button color="inherit"  component={Link} to="/home">Home</Button>
                <Button color="inherit" component={Link} to="/create">Create</Button>
                
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
