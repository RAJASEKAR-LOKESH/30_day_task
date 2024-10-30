import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Container, CircularProgress } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({}); // Set as an empty object
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get(`https://672121b498bbb4d93ca79083.mockapi.io/crud/crud/${id}`);
                const userData = response.data;
                setUser(userData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getUserData();
    }, [id]);

    const handleInputChange = (setter) => (e) => setter(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = {
            name: user.name,
            username: user.username,
            email: user.email,
            address: user.address,
            latitude: user.latitude,
            longitude: user.longitude,
            phone: user.phone,
            website: user.website,
            company: user.company,
            catchPhrase: user.catchPhrase,
            bs: user.bs,
        };

        try {
            await axios.put(`https://672121b498bbb4d93ca79083.mockapi.io/crud/crud/${id}`, formData);
            navigate('/home');
        } catch (error) {
            console.error("Error updating data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h5" component="h1" align="center" gutterBottom sx={{ paddingTop: 2 }}>
                Update Data Form
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField label="Name" value={user.name || ''} onChange={handleInputChange((val) => setUser({ ...user, name: val }))} fullWidth required margin="normal" />
                <TextField label="Username" value={user.username || ''} onChange={handleInputChange((val) => setUser({ ...user, username: val }))} fullWidth required margin="normal" />
                <TextField label="Email" value={user.email || ''} onChange={handleInputChange((val) => setUser({ ...user, email: val }))} fullWidth required margin="normal" />
                <TextField label="Address e.g:street, city, zipcode" value={user.address || ''} onChange={handleInputChange((val) => setUser({ ...user, address: val }))} fullWidth required margin="normal" />
                <TextField label="Latitude" value={user.latitude || ''} onChange={handleInputChange((val) => setUser({ ...user, latitude: val }))} fullWidth required margin="normal" />
                <TextField label="Longitude" value={user.longitude || ''} onChange={handleInputChange((val) => setUser({ ...user, longitude: val }))} fullWidth required margin="normal" />
                <TextField label="Phone" value={user.phone || ''} onChange={handleInputChange((val) => setUser({ ...user, phone: val }))} fullWidth required margin="normal" />
                <TextField label="Website" value={user.website || ''} onChange={handleInputChange((val) => setUser({ ...user, website: val }))} fullWidth required margin="normal" />
                <TextField label="Company Name" value={user.company || ''} onChange={handleInputChange((val) => setUser({ ...user, company: val }))} fullWidth required margin="normal" />
                <TextField label="CatchPhrase" value={user.catchPhrase || ''} onChange={handleInputChange((val) => setUser({ ...user, catchPhrase: val }))} fullWidth required margin="normal" />
                <TextField label="Company Bs" value={user.bs || ''} onChange={handleInputChange((val) => setUser({ ...user, bs: val }))} fullWidth required margin="normal" />
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 0.5, marginBottom: 2 }}>
                    {loading ? <CircularProgress size={24} color="inherit" /> : 'Update'}
                </Button>
            </form>
        </Container>
    );
}

export default Update;
