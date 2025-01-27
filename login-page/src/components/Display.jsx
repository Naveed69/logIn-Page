import { useState } from "react";
import LoggedIn from "./LoggedIn";
const Display = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const handle = (e) => {
    e.preventDefault();
    if (
      e.target.username.value === "user" &&
      e.target.password.value === "password"
    )
      setLoggedIn(true);
    e.target.username.value = "";
    e.target.password.value = "";
  };
  return (
    <>
      <h1>Login Page</h1>
      {loggedIn ? (
        <LoggedIn />
      ) : (
        <form onSubmit={(e) => handle(e)}>
          <lable>
            Username:
            <input
              type="text"
              name="username"
              placeholder="username"
              required
            />
          </lable>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              placeholder="password"
              required
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
};
export default Display;
