const Display = () => {
  return (
    <>
      <h1>Login Page</h1>
      <form>
        <lable>
          Username:
          <input type="text" placeholder="username" required />
        </lable>
        <br />
        <label>
          Password:
          <input type="password" placeholder="password" required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
export default Display;
