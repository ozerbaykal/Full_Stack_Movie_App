import Loader from "../components/Loader";
import api from "../utils/api";
import { useQuery } from "@tanstack/react-query";
import Error from "../components/Error";

import Card from "../components/Card";
import Hero from "../components/Hero";

const Main = () => {
  const { data, error, isLoading, refect } = useQuery({
    queryKey: ["movies"],
    queryFn: () => api.get("/api/movies").then((res) => res.data),
  });
  console.log(isLoading, data, error);

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
