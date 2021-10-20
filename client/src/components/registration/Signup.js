import { useState } from "react";

const Signup = ({ onAddUser }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!userName || !email || !password) alert("All fields must be filled!");

    onAddUser({ userName, email, password });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label>User name: </label>
          <input
            type="text"
            placeholder="example01"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="text"
            placeholder="mail@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
      <button>SIGN UP</button>
    </>
  );
};

export default Signup;
