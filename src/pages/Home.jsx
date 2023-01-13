import React, { useEffect, useState } from "react";

import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Home = () => {
  const [data, setData] = useState([]);

  const fetchApi = async () => {
    try {
      const resp = await fetch("https://rickandmortyapi.com/api/character");
      const { results } = await resp.json();
      // console.log(results);
      setData(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        padding: "1rem",
        marginTop: "2rem",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, sm: 6, md: 3 }}
        justifyContent="center"
      >
        {data?.map((card) => (
          <Grid key={card?.id} item>
            <Card sx={{ width: { xs: "100%", sm: 300 }, position: "relative" }}>
              <IconButton sx={{ position: "absolute", top: 5, right: 5 }}>
                <FavoriteBorderIcon fontSize="large" />
              </IconButton>
              <CardMedia
                component="img"
                height="180"
                image={card?.image}
                alt={card?.name}
              />
              <CardContent>
                <Typography variant="h6" align="center">
                  {card?.name}
                </Typography>

                <Typography variant="body1" align="center">
                  {card?.status}
                </Typography>

                <Typography variant="body2" align="center">
                  {card?.gender}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
