import InputField from "../components/InputField";

import { inputs } from "../utils/constans";
import api from "../utils/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    //inputlardaki veriyi nesne şeklinde almalıyız
    const formdata = new FormData(e.target);
    const movieData = Object.fromEntries(formdata.entries());
    //kategorileri diziye çevir
    movieData.genre = movieData.genre.split(",");

    //ekibi diziye çevir
    movieData.cast = movieData.cast.split(",");
    //api ' a film oluşturmak için istek at
    api
      .post("/api/movies", movieData)
      .then((res) => {
        toast.success("Film Listeye eklendi");

        navigate(`/movie/${res.data.id}`);
      })
      .catch((err) => {
        toast.error("Üzgünüz :( işlem başarısız");
      });
  };

  return (
    <div className="bg-yellow-600 flex-1  grid place-items-center px-5  py-8">
      <div className="bg-white w-full max-w-[800px] p-10 rounded shadow-lg  ">
        <h1 className="text-3xl font-semibold mb-6">yeni film oluştur</h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1  md:grid-cols-2 gap-6"
        >
          {inputs.map((props, i) => (
            <InputField {...props} key={i} />
          ))}
          <button className="shadow border py-3 rounded-lg hover:bg-gray-200 hover:shadow-lg transition">
            Oluştur
          </button>
        </form>
        {/* <div>
          <img src="./movie-bg.jpg" className="rounded-full max-h-[300px]" />
        </div> */}
      </div>
    </div>
  );
};

export default Create;
