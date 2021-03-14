import React from "react";
import { useAuth } from "auth";
import { Redirect } from "react-router-dom";

const Home = () => {
  const auth = useAuth();

  return auth.user ? (
    <Redirect to="/projects" />
  ) : (
    <div>
      <h1>Welcome to Bug Tracker!</h1>
      <p>Please create an account or log in.</p>
    </div>
  );
};

export default Home;
