import { useState } from "react";
import { login } from "api";

const useProvideAuth = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [token, setToken] = useState(localStorage.getItem("token"));

  const signin = async (email, password) => {
    try {
      console.log("Signing in from useProvideAuth...");
      const res = await login(email, password);
      console.log(res);
      if (res.status === 200) {
        console.log("Success!");
        const { user } = res.data;
        const { token } = res.data.tokens.access;
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
        setToken(token);
        localStorage.setItem("token", token);
      } else {
        console.log("Login failure...");
        console.log(res);
      }
    } catch (e) {
      console.log("Unable to sign in...");
      console.log(e);
    }
  };

  const signout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return {
    user,
    token,
    signin,
    signout,
  };
};

export default useProvideAuth;
