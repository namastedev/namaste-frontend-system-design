const ProductCard = ({
  id,
  title,
  price,
  description,
  thumbnail,
  discountPercentage,
}) => {
  return (
    <div className="m-4 p-4 border border-solid border-black">
      <img className="h-48 w-60 object-fill" alt={title} src={thumbnail} />
      <h1 className="p-2 font-bold text-xl w-60">
        {id} -{title}
      </h1>
      <h2 className="p-1 text-lg">
        Rs. {price} - dicount of {discountPercentage}%
      </h2>
      <p className="p-1 text-md w-60">{description}</p>
    </div>
  );
};
export default ProductCard;
