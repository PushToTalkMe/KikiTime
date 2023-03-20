import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import { useTypedSelector } from "../hooks/use_typed_selector";
import { useDispatch } from "react-redux";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context";

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
  const setOpen = useContext(Context);

  const favorites = useTypedSelector(
    (state) => state.listFilmsReducer.favorites
  );
  const watchLater = useTypedSelector(
    (state) => state.listFilmsReducer.watchLater
  );
  const isAuth = useTypedSelector((state) => state.authReducer.isAuth);

  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isAuth) {
      if (!favorites.includes(id)) {
        dispatch({ type: "ADD_FAVORITES", payload: id });
      } else {
        dispatch({ type: "REMOVE_FAVORITES", payload: id });
      }
    } else {
      setOpen(true);
    }
  };

  const handleWatchLater = () => {
    if (isAuth) {
      if (!watchLater.includes(id)) {
        dispatch({ type: "ADD_WATCH_LATER", payload: id });
      } else {
        dispatch({ type: "REMOVE_WATCH_LATER", payload: id });
      }
    } else {
      setOpen(true);
    }
  };

  const iconStatusStar = () => {
    return isAuth ? (
      favorites.includes(id) ? (
        <StarOutlinedIcon />
      ) : (
        <StarBorderOutlinedIcon />
      )
    ) : (
      <StarBorderOutlinedIcon />
    );
  };

  const iconStatusWatchLater = () => {
    return isAuth ? (
      watchLater.includes(id) ? (
        <BookmarkOutlinedIcon />
      ) : (
        <BookmarkBorderOutlinedIcon />
      )
    ) : (
      <BookmarkBorderOutlinedIcon />
    );
  };

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
              <IconButton onClick={() => handleFavorite()}>
                {iconStatusStar()}
              </IconButton>
              <IconButton onClick={() => handleWatchLater()}>
                {iconStatusWatchLater()}
              </IconButton>
            </Stack>
            <Typography variant="h5">{title}</Typography>
          </CardContent>
          <Link
            onClick={() => {
              dispatch({ type: "ADD_FILM", payload: id });
            }}
            to={`/KikiTime/${id}`}
          >
            <CardActions>
              <Button variant="outlined" sx={{ width: "100%" }}>
                Подробнее
              </Button>
            </CardActions>
          </Link>
        </Stack>
      </Card>
    </Grid>
  );
}

export { CardFilm };
