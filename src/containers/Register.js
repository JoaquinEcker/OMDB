import axios from "axios";
import useInput from "../hooks/useInput";
import { useHistory } from "react-router";

export function Register() {
  const history = useHistory();
  const email = useInput("");
  const password = useInput("");

  const handleRegisterClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/auth/register", {
        email: email.value,
        password: password.value,
      })
      .then(alert(`Registro Exitoso`))
      .then(history.push("/login"))
      .catch((err) => alert(`Error en el logueo, intentelo nuevamente`));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleRegisterClick}
        style={{ marginTop: "5%", width: "30%" }}
      >
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              placeholder="Email"
              {...email}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              placeholder="Password"
              {...password}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control">
            <button class="button is-success" type="submit" size="large">
              Registrarme
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
