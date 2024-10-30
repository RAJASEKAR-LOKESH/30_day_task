import { Button, Card, CardContent, Typography } from "@mui/material";

function Display({ user }) {


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
        <strong>Address:</strong> {user.address.street},
        {user.address.city}, {user.address.zipcode}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "left", marginLeft: "10px", marginTop: "7px" }}
      >
        <strong>Geolocation: </strong>
        <strong>lat: </strong>
        {user.address.geo.lat}
        <strong>, lng: </strong>
        {user.address.geo.lng}
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
        <strong>Company:</strong> {user.company.name}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "left", marginLeft: "10px", marginTop: "7px" }}
      >
        <strong>CatchPharse:</strong> {user.company.catchPhrase}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "left", marginLeft: "10px", marginTop: "7px" }}
      >
        <strong>Bs:</strong> {user.company.bs}
      </Typography>
      <CardContent
      sx={{marginTop:-2}}
      ></CardContent>
    </Card>
  );
}

export default Display;
