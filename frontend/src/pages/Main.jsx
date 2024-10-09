import Loader from "../components/Loader";
import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";
import Error from "../components/Error";
import { useSearchParams } from "react-router-dom";
import Card from "../components/Card";
import Hero from "../components/Hero";

const Main = () => {
  const [params, setParams] = useSearchParams();

  //api isteğinde kullanılacak olan nesne
  const options = {
    params: {
      query: params.get("query"),
    },
  };

  const { data, error, isLoading, refect } = useQuery({
    queryKey: ["movies", options],
    queryFn: () => api.get("/api/movies", options).then((res) => res.data),
  });

  return (
    <div>
      <Hero />
      {isLoading ? (
        <h1>
          <Loader />
        </h1>
      ) : error ? (
        <Error info={error} refect={refect} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-5  md:px-10 ">
          {data.map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
