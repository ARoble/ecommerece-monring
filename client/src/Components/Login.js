import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function login() {
    //code
    axios
      .post("http://localhost:8000/api/user/signin", user)
      .then((res) => toast.success("User logged in"))
      .catch((e) => toast.error(e.response.data.message));
  }
  return (
    <div className="login-card">
      <h2>Login</h2>
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
          type="password"
          placeholder="password"
          className="input"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </div>
      <button className="btn-review hover" onClick={() => login()}>
        Login
      </button>
    </div>
  );
}

export default Login;
