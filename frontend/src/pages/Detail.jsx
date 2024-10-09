import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import Error from "../components/Error";

import ListField from "../components/ListField";
import DeleteButton from "../components/DeleteButton";

const Detail = () => {
  const { id } = useParams();

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["movie"],
    queryFn: () => api.get(`/api/movies/${id}`).then((res) => res.data),
  });

  if (isLoading) return <Loader />;

  if (error) return <Error info={error} refect={refetch} />;

  return (
    <div className="p-10">
      <div className=" flex justify-end">
        <DeleteButton id={data.id} />
      </div>

      <div className="flex flex-col gap-10 items-center md:flex-row">
        <div>
          <img
            src={`https://picsum.photos/seed/${data.id}/250/400 `}
            alt="poster"
            className="rounded-md "
          />
        </div>
        <div className="flex flex-col gap-10">
          {/* başlık */}
          <div>
            <h1 className="text-3xl font font-semibold mb-3">{data.title}</h1>
            <p>{data.description}</p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <Field
              label="İzleyici Skoru"
              value={Number(data.rating).toFixed(1)}
            />
            {/* dil */}
            <Field label="Süre" value={data.duration} />
            {/* süre */}
            <Field label="Dil" value={data.language} />
            {/* yapımcı */}
            <Field label="Yıl" value={data.year} />
            {/* yıl */}
            <Field label="Yapımcı" value={data.director} />
          </div>

          {/* EKİP */}

          <ListField label="EKİp" arr={data.cast} />

          <ListField label="Türler" arr={data.genre} />
        </div>
      </div>
    </div>
  );
};

export default Detail;

const Field = ({ label, value }) => {
  return (
    <p>
      <span className="font-semibold me-3">{label}</span>
      <span className="p-2 px-4 rounded-full text-white bg-gray-400 font-semibold whitespace-nowrap">
        {value}:
      </span>
    </p>
  );
};
