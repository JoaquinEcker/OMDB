import { sendLoginRequest } from "../state/users";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import { message } from "antd";
import { useHistory } from "react-router";

export function Login() {
  const history = useHistory();
  const email = useInput("");
  const password = useInput("");

  const dispatch = useDispatch();
  const handleLoginClick = (e) => {
    e.preventDefault();
    dispatch(sendLoginRequest({ email: email.value, password: password.value }))
      .then(({ payload }) =>
        message
          .success(
            `Logueo exitoso, bienvenido: ${payload.email}. Espere a ser redirigido...`
          )
          .then(
            setTimeout(() => {
              history.push("/");
            }, 2000)
          )
      )
      .catch((err) =>
        message.error(`Fallo en el logueo, intente nuevamente`, 5)
      );
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleLoginClick}
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
            <button className="button is-success" type="submit" size="large">
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
