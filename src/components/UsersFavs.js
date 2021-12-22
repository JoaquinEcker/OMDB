// import axios from "axios";
// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

// export function UsersFavs() {
//   const user = useSelector((state) => state.user);
//   const [favs, setFavs] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`/api/favorites/${user.id}`)
//       .then((res) => res.data)
//       .then((favs) => setFavs(favs));
//   }, []);

//   if (favs.favourites) {
//     return (
//       <div>
//         <h2>{user.email}</h2>
//         {favs.favourites.map((movie, i) => {
//           return (
//             <li key={i}>
//               {movie.Title}, {movie.Year}
//             </li>
//           );
//         })}
//       </div>
//     );
//   } else {
//     return <div></div>;
//   }
// }
