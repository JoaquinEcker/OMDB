import axios from "axios";
import useInput from "../hooks/useInput";
import { useHistory } from "react-router";
import { successAlert } from "../utils/alerts";
import { errorAlert } from "../utils/alerts";
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
      .then(() => successAlert("Exito!", "Logueate para continuar"))
      .then(history.push("/login"))
      .catch(() => errorAlert("Error", "Complete los datos correctamente!"));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleRegisterClick}
        style={{ marginTop: "5%", width: "30%" }}
      >
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Registrar usuario
        </h2>
        <br />
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
        <div
          className="field"
          style={{ display: "flex", justifyContent: "center" }}
        >
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
