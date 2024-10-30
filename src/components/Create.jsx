import React, { useState } from 'react';
import { Button, TextField, Typography, Container, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Create() {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [company, setCompany] = useState('');
    const [catchPhrase, setCatchPhrase] = useState('');
    const [bs, setBs] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const postData = async (data) => {
        setLoading(true);
        try {
            const response = await axios.post("https://672121b498bbb4d93ca79083.mockapi.io/crud/crud", data);
            console.log(response.data);
            setLoading(false);
            navigate('/home');
        } catch (error) {
            console.error("Error posting data:", error);
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const formData = {
            name: name,
            username: userName,
            email: email,
            address: address,
            latitude: latitude,
            longitude: longitude,
            phone: phone,
            website: website,
            company: company,
            catchPhrase: catchPhrase,
            bs: bs,
        };
        postData(formData);
    };
    

    return (
        <Container maxWidth="xs">
            <Typography variant="h5" component="h1" align="center" gutterBottom sx={{ paddingTop: 2 }}>
                REGISTRATION FORM
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Enter your name"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Address e.g:street, city, zipcode"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <TextField
                    label="Geolocation Latitude"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                />
                <TextField
                    label="Geolocation Longitude"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                />
                <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <TextField
                    label="Website"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                />
                <TextField
                    label="Company name"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
                <TextField
                    label="CatchPhrase"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    value={catchPhrase}
                    onChange={(e) => setCatchPhrase(e.target.value)}
                />
                <TextField
                    label="Company Bs"
                    variant="outlined"
                    fullWidth
                    required
                    margin="normal"
                    value={bs}
                    onChange={(e) => setBs(e.target.value)}
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: 0.5, marginBottom: 2 }}
                >
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Create'}
                </Button>
            </form>
        </Container>
    );
}

export default Create
