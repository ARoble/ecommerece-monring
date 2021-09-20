import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function Register() {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  function signUp() {
    //code
    axios
      .post("http://localhost:8000/api/user", user)
      .then((res) => toast.success("User created successfully"))
      .catch((e) => toast.error(e.response.data.message));
  }

  return (
    <div className="login-card">
      <h2>Sign Up</h2>
      <div>
        <input
          type="text"
          placeholder="email"
          className="input"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="username"
          className="input"
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="password"
          className="input"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <button className="btn-review hover" onClick={() => signUp()}>
        Sign Up
      </button>
    </div>
  );
}

export default Register;
