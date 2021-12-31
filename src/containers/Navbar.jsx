import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { sendLogoutRequest } from "../state/users";
import { useHistory } from "react-router";

export function Navbar() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{
          backgroundColor: "rgb(166, 202, 231  )",
          font: "whitesmoke",
          marginBottom: "1px",
        }}
      >
        <div className="navbar-brand">
          <p className="navbar-item">OMDB</p>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Buscar
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                {user.id ? (
                  <Link to="/favs" className="navbar-item">
                    Favoritos
                  </Link>
                ) : (
                  <Link to="/login" className="navbar-item">
                    Favoritos (Login to watch)
                  </Link>
                )}

                <Link to="/users" className="navbar-item">
                  Usuarios
                </Link>
                <hr className="navbar-divider" />
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {user.id ? (
                  <div style={{ display: "flex" }}>
                    <div className="navbar-item">
                      <p>{user.email}!</p>
                    </div>
                    <button
                      className="button is-info"
                      onClick={() =>
                        dispatch(sendLogoutRequest()).then(history.push("/"))
                      }
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <div>
                    <Link to="/login">
                      <button
                        type="primary"
                        size="large"
                        className="button is-info"
                        style={{ marginRight: "10px" }}
                      >
                        Login
                      </button>
                    </Link>
                    <Link to="/register">
                      <button
                        type="primary"
                        size="large"
                        className="button is-info"
                      >
                        Register
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
