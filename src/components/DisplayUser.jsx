import { Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

function DisplayUser({ user,setUserData }) {
    const navigate = useNavigate();
    const deleteData=async(id)=>{
        let response=await axios.delete(`https://672121b498bbb4d93ca79083.mockapi.io/crud/crud/${id}`)
        console.log(response.data)
        getData()
      }
      const getData=async()=>{
        let response=await axios.get('https://672121b498bbb4d93ca79083.mockapi.io/crud/crud')
        console.log(response.data)
        setUserData(response.data)
      }

  return (
    <Card
      sx={{
        mt: 0,
        bgcolor: "#f0f8ff",
        width: "30%",
        padding: "10px",
        textAlign: "center",
        flex: "1 1 300px",
        minWidth: "380px",
        maxWidth: "30%",
        paddingBottom:2
      }}
    >
      <Typography variant="h6" component="div">
        {user.name}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ textAlign: "left", marginLeft: "10px", marginTop: "7px" }}
      >
        <strong>Username:</strong> {user.username}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "left", marginLeft: "10px", marginTop: "7px" }}
      >
        <strong>Email:</strong> {user.email}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "left", marginLeft: "10px", marginTop: "7px" }}
      >
        <strong>Address:</strong> {user.address},
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "left", marginLeft: "10px", marginTop: "7px" }}
      >
        <strong>Geolocation: </strong>
        <strong>lat: </strong>
        {user.latitude}
        <strong>, lng: </strong>
        {user.longitude}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "left", marginLeft: "10px", marginTop: "7px" }}
      >
        <strong>Phone:</strong> {user.phone}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "left", marginLeft: "10px", marginTop: "7px" }}
      >
        <strong>Website:</strong> {user.website}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "left", marginLeft: "10px", marginTop: "7px" }}
      >
        <strong>Company:</strong> {user.company}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "left", marginLeft: "10px", marginTop: "7px" }}
      >
        <strong>CatchPharse:</strong> {user.catchPhrase}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "left", marginLeft: "10px", marginTop: "7px" }}
      >
        <strong>Bs:</strong> {user.bs}
      </Typography>
      <CardContent
      sx={{marginTop:-2}}
      ></CardContent>
      <Button variant="contained" color="success" sx={{ marginRight: 1, }}       
      onClick={()=>{
        navigate(`/update/${user.id}`)
      }}>
        Update
      </Button>
      <Button variant="contained" color="error"
       onClick={()=>{
        deleteData(user.id)
      }}
      >
        Delete
      </Button>
    </Card>
  );
}

export default DisplayUser;
