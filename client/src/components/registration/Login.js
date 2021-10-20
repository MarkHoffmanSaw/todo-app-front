import { useState } from "react";

const Login = ({ onContinueUser }) => {
  const [userNameOrEmail, setUserNameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!userNameOrEmail || !password) alert("All fields must be filled!");

    onContinueUser({ userNameOrEmail, password });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label>User name or email: </label>
          <input
            type="text"
            placeholder="example01"
            value={userNameOrEmail}
            onChange={(e) => setUserNameOrEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="text"
            placeholder="***********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
      <button>LOG IN</button>
    </>
  );
};

export default Login;
