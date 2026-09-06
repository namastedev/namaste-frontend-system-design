// Server Side Pagination => In this approach, the server sends only a limited number of records to the client,
// and the client can request more records by requesting the next page.
// This is useful when the number of records is very large and sending all the records at once is not feasible.

// Frontend Pagination => In this approach, the server sends all the records to the client,
// and the client paginates the records.

// Here we have implemented Server Side Pagination
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

// Limit of products on each page
const LIMIT = 10;

// Use the below API to fetch many different types of data
// https://dummyjson.com/docs

const Pagination = () => {
  // State to store current page, we are using 0 based indexing where 0 is the first page
  const [currentPage, setCurrentPage] = useState(0);
  // State to store products
  const [products, setProducts] = useState([]);
  // State to store number of pages
  const [noOfPages, setNoOfPages] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const fetchProducts = async () => {
    const data = await fetch(
      // Fetch products from the API where limit is the number of products on each page and skip is the number of products to skip
      `https://dummyjson.com/products?limit=${LIMIT}&skip=${
        currentPage * LIMIT
      }&select=title,price,description,thumbnail,discountPercentage`
    );
    const json = await data.json();
    console.log(json);
    setProducts(json.products);
    // Calculate the number of pages based on the total number of products, if the total number of products is not a multiple of the limit, then add 1 page
    setNoOfPages(json.total % LIMIT === 0 ? parseInt(json.total / LIMIT, 10) : parseInt(json.total / LIMIT, 10) + 1);
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="p-10 cursor-pointer">
      {/* Don't show Prev Button if we want to go below 0 for currentPage */}
        {currentPage > 0 && (
          <span
            onClick={() => {
              setCurrentPage((currentPage) => currentPage - 1);
            }}
          >
            Prev
          </span>
        )}
        {/* [...Array(noOfPages).keys()] will create an Array which will go from [1,2,3,4,.....,noOfPages] */}
        {[...Array(noOfPages).keys()].map((pN) => (
          <span
            className={
              "text-xl p-4 " + (pN === currentPage && "font-bold underline")
            }
            key={pN}
            onClick={() => {
              setCurrentPage(pN);
            }}
          >
            {pN + 1}
          </span>
        ))}
        {/* Don't show Next Button if currentPage want to go beyond noOfPages */}
        {currentPage < noOfPages - 1 && (
          <span
            onClick={() => {
              setCurrentPage((currentPage) => currentPage + 1);
            }}
          >
            Next
          </span>
        )}
      </div>
    </div>
  );
};
export default Pagination;
