const Shimmer = () => {
  return Array(15)
    .fill(0)
    .map((n, i) => (
      <div key={i} className="p-5 m-5 border border-black rounded-lg">
        <div className="w-64 h-64 bg-gray-200"></div>
      </div>
    ));
};
export default Shimmer;
