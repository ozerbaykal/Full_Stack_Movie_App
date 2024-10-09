const ListField = ({ label, arr }) => {
  return (
    <div>
      <h2 className="font-semibold mb-1">{label}</h2>
      <div className="flex gap-2 flex-wrap">
        {arr.map((i) => (
          <span className="p-2 rounded-full text-white bg-gray-400 font-semibold">
            {i}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ListField;
