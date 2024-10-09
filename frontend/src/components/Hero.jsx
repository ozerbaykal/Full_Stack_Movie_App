import { useSearchParams } from "react-router-dom";

const Hero = () => {
  const [params, setParams] = useSearchParams();

  //form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    //aratılan kelimeye eriş

    const text = e.target[0].value;

    //url'e parametre olarak formadan alınantexti ekle

    setParams({ query: text });
  };

  return (
    <div className="px-10 py-20  lg:px-20 bg-[linear-gradient(#00000070,#00000070),url('wick.jpg')] bg-center bg-cover text-white">
      <h1 className="text-4xl md:text:5xl">Hoşgeldin</h1>
      <h2 className="text-xl sm:text-2xl font-semibold ">
        Milyonlarca film ve aktörleri keşfet
      </h2>
      <form
        onSubmit={handleSubmit}
        className=" rounded-lg w-full overflow-hidden flex mt-5"
      >
        <input
          defaultValue={params.get("query")}
          className="  sm:w-full  max-w-[700px] py-2 px-4 text-black outline-none "
          type="text"
          placeholder="Film,Dizi Aktör ara.."
        />
        <button className="bg-blue-500  rounded-e-full px-5 hover:bg-blue-600 font-semibold ">
          Ara
        </button>
      </form>
    </div>
  );
};

export default Hero;
