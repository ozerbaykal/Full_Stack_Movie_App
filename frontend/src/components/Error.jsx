const Error = ({ info, refect }) => {
  return (
    <div className="my-10 text-center bg-red-500 p-5 rounded-md max-w-[600px] mx-auto text-white">
      <h1>Üzgünüz bir sorun oluştu :(</h1>
      <h1>{info.message}</h1>
      <button
        className=" border rounded-md px-3 py-1 mt-5 hover:bg-white hover:text-black transition"
        onClick={refect}
      >
        Tekrar Dene
      </button>
    </div>
  );
};

export default Error;
