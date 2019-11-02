import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";

import MovieDetail from "../../components/Omdb/movieDetail";

const Detail = () => {
  const router = useRouter();
  const imdbID = router.query.id || "";
  return <MovieDetail id={imdbID} />;
};

export default Detail;
