import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 md:px-10 border-b shadow ">
      <Link className=" flex items-center" to="/">
        <img src="../public/movie-logo.png" width={80} alt="" />
        <h2 className="font-bold text-2xl max-sm:hidden">Filmania</h2>
      </Link>

      <Link
        className="border rounded-full py-1 px-5 hover:bg-black hover:text-white transition"
        to="/create"
      >
        Film OLuştur
      </Link>
    </header>
  );
};

export default Header;
