import { use, useState } from "react";
import LoggedIn from "./LoggedIn";
const Display = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [falselogin, setFalselogin] = useState(false);
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const handle = (e) => {
    e.preventDefault();
    if (userName === "user" && password === "password") {
      setLoggedIn(true);
      setFalselogin(false);
      setuserName("");
      setPassword("");
    } else {
      setFalselogin(true);
    }
  };
  // const handleUser=()=>{
  //   setuserName
  // }
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
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
              required
            />

            <br />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
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
