import { Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Display from "./Display";
import DisplayUser from "./DisplayUser";

function Home() {
  const [apiData, setApiData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [userError, setUserError] = useState(false);

  const getData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setApiData(response.data);
      setApiError(false); 
    } catch (error) {
      console.error("Error fetching API Data:", error);
      setApiError(true); 
    }
  };

  const getUserData = async () => {
    try {
      const response = await axios.get("https://672121b498bbb4d93ca79083.mockapi.io/crud/crud");
      setUserData(response.data);
      setUserError(false); 
    } catch (error) {
      console.error("Error fetching User Data:", error);
      setUserError(true); 
    }
  };

  useEffect(() => {
    getData();
    getUserData();
  }, []);

  return (
    <>
      <Typography variant="h5" component="h1" align="center" gutterBottom sx={{ paddingTop: 2 }}>
        API DATA
      </Typography>
      <Container
        maxWidth="xl"
        sx={{
          mt: 0,
          pt: 2,
          mb: 1,
          pb: 3,
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          height: "auto",
          border: '4px solid green'
        }}
      >
        {apiError ? (
          <Typography variant="body1" color="error" align="center">
            Failed to load API Data
          </Typography>
        ) : (
          apiData.map((user) => <Display key={user.id} user={user} />)
        )}
      </Container>

      <Typography variant="h5" component="h1" align="center" gutterBottom sx={{ paddingTop: 2 }}>
        USER DATA
      </Typography>
      <Container
        maxWidth="xl"
        sx={{
          mt: 0,
          pt: 2,
          pb: 3,
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          height: "auto",
          border: '4px solid green'
        }}
      >
        {userError ? (
          <Typography variant="body1" color="error" align="center">
            Failed to load User Data
          </Typography>
        ) : (
          userData.map((user) => (
            <DisplayUser key={user.id} user={user} setUserData={setUserData} />
          ))
        )}
      </Container>
    </>
  );
}

export default Home;
