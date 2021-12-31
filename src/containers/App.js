import { Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar.jsx";
import { Welcome } from "./Welcome.jsx";
import { MoviesList } from "../components/MoviesList";
import { Users } from "../components/Users";
import { Movie } from "../components/Movie.js";
import { Login } from "./Login";
import { Register } from "./Register";
import { Favorites } from "../components/Favorites.js";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../state/users.js";
import { checkLogin } from "../state/users.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLogin());
  }, []);

  return (
    <div className="h-screen">
      <Navbar />
      <div className="h-full flex justify-center items-center">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/movies" component={MoviesList} />
          <Route path="/users" component={Users} />
          <Route path="/movies/:movieId" component={Movie} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/favs" component={Favorites} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
