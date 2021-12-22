import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { removeFromFavorites } from "../state/users";
export function Favorites() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/favorites/${user.id}`)
      .then((res) => res.data)
      .then((favs) => setFavs(favs.favourites));
  }, []);

  function handleDelete(id) {
    axios
      .delete(`/api/favorites?userId=${user.id}&movieId=${id}`)
      .then((_) => favs.filter((movie) => movie.id !== id))
      .then((favs) => setFavs(favs));
  }

  if (favs) {
    return (
      <div>
        {favs.map((movie, i) => {
          return (
            <li key={i}>
              {movie.Title}, {movie.Year} -
              <button onClick={() => handleDelete(movie.id)}>
                {/* <button onClick={() => dispatch(removeFromFavorites(movie.id))}> */}
                <FaTrash />
              </button>
            </li>
          );
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
}
