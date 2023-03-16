import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Stack,
  IconButton,
} from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";

function CardFilm({
  id,
  poster,
  title,
  vote,
}: {
  id: number;
  poster: string;
  title: string;
  vote: number;
}) {
  return (
    <Grid item xs={12} lg={6} xl={4}>
      <Card sx={{ display: "flex", maxWidth: "500px" }}>
        <CardMedia
          component="img"
          image={`https://image.tmdb.org/t/p/w500${poster}`}
          alt="poster"
          sx={{ height: 280, width: "45%" }}
        />
        <Stack direction="column" sx={{ width: "100%" }}>
          <CardContent sx={{ flex: "1 1 auto", padding: "5px" }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6" sx={{ flex: "1 1 auto" }}>
                Рейтинг: {vote}
              </Typography>
              <IconButton>
                <StarBorderOutlinedIcon />
              </IconButton>
              <IconButton>
                <BookmarkBorderOutlinedIcon />
              </IconButton>
            </Stack>
            <Typography variant="h5">{title}</Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" sx={{ width: "100%" }}>
              Подробнее
            </Button>
          </CardActions>
        </Stack>
      </Card>
    </Grid>
  );
}

export { CardFilm };
