import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@mui/material/";
import { useState } from "react";
import { useTypedSelector } from "../hooks/use_typed_selector";
import { useDispatch } from "react-redux";

function Header({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}) {
  const [user, setUser] = useState({ login: "", password: "" });
  const auth = useTypedSelector((state) => state.authReducer);

  const dispatch = useDispatch();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Home
        </Typography>
        {!auth.isAuth ? (
          <Button color="inherit" onClick={handleOpen}>
            Login
          </Button>
        ) : (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        )}
        <Dialog open={open} onClick={handleClose}>
          <DialogTitle
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Авторизация
          </DialogTitle>
          <DialogContent
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <DialogContentText>
              Чтобы войти на сайт и воспользоваться функцией добавления фильма в
              список избранных/отложенных, пожалуйста, введите логин и пароль от
              своего аккаунта.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="login"
              label="Логин"
              type="text"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setUser({ ...user, login: e.target.value });
              }}
            ></TextField>
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Пароль"
              type="password"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            ></TextField>
          </DialogContent>
          <DialogActions
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Button
              variant="contained"
              onClick={() => {
                handleClose();
                dispatch({ type: "LOGIN", payload: user });
              }}
            >
              Войти
            </Button>
          </DialogActions>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
}

export { Header };
