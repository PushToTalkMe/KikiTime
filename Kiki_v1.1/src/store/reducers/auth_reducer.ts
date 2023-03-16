const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

interface AuthAction {
  type: string;
  payload: {
    login: string;
    password: string;
  };
}

const users = [
  {
    login: "PushToTalk",
    password: "123456789",
    isAuth: false,
  },
];

const anonym = {
  login: "",
  password: "",
  isAuth: false,
};

const userJson = localStorage.getItem("user");

const currentUser = userJson !== null ? JSON.parse(userJson) : anonym;

export const authReducer = (state = currentUser, action: AuthAction) => {
  switch (action.type) {
    case LOGIN:
      return users.find((user) => {
        if (
          user.login === action.payload.login &&
          user.password === action.payload.password
        ) {
          user.isAuth = true;
          localStorage.setItem("user", JSON.stringify(user));
          return user;
        } else {
          return state;
        }
      });
    case LOGOUT:
      localStorage.removeItem("user");
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
