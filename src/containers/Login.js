import { sendLoginRequest } from "../state/users";
import { useDispatch } from "react-redux";
import useInput from "../hooks/useInput";
import { useHistory } from "react-router";
import { successAlert } from "../utils/alerts";
import { errorAlert } from "../utils/alerts";

export function Login() {
  const history = useHistory();
  const email = useInput("");
  const password = useInput("");

  const dispatch = useDispatch();
  const handleLoginClick = (e) => {
    e.preventDefault();
    dispatch(
      sendLoginRequest({
        email: email.value,
        password: password.value,
        errorAlert,
        successAlert,
      })
    ).then(({ payload }) => payload && history.push("/"));
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleLoginClick}
        style={{ marginTop: "5%", width: "30%" }}
      >
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
          }}
        >
          Login
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
            <button className="button is-success" type="submit" size="large">
              Login
            </button>
          </p>
        </div>
      </form>
    </div>
  );
}
