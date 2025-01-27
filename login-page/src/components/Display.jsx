import { use, useState } from "react";
import LoggedIn from "./LoggedIn";
const Display = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [falselogin, setFalselogin] = useState(false);
  const handle = (e) => {
    e.preventDefault();
    if (
      e.target.username.value === "user" &&
      e.target.password.value === "password"
    ) {
      setLoggedIn(true);
      setFalselogin(false);
      e.target.username.value = "";
      e.target.password.value = "";
    } else {
      setFalselogin(true);
    }
  };
  return (
    <>
      <h1>Login Page</h1>
      {loggedIn ? (
        <LoggedIn />
      ) : (
        <>
          {falselogin ? <p>Invalid username or password</p> : <></>}
          <form onSubmit={(e) => handle(e)}>
            <lable>Username:</lable>
            <input
              type="text"
              name="username"
              placeholder="username"
              required
            />

            <br />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              required
            />

            <br />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
    </>
  );
};
export default Display;
