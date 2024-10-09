import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import { toast } from "react-toastify";

const DeleteButton = ({ id }) => {
  const navigate = useNavigate();
  //film'i silmek için api isteği at
  const handleDelete = () => {
    api
      .delete(`/api/movies/${id}`)
      .then(() => {
        navigate("/");
        toast.warning("Film kaldırıldı");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Silme işlemi başarısız");
      });
  };
  return (
    <button
      onClick={handleDelete}
      className=" bg-red-600 flex justify-end text-white p-2 rounded-md hover:bg-red-400 "
    >
      <FaTrash />
    </button>
  );
};

export default DeleteButton;
