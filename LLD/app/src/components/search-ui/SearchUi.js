// Enable CORS plugin in the browser to run this code

import { useEffect, useState } from "react";

const SearchUi = () => {
  const [searchText, setSearchText] = useState("");  // State for search text
  const [searchResults, setSearchResults] = useState([]);  // State for search results
  const [isResultVisible, setIsResultVisible] = useState(false);  // State for visibility of search results
  let cache = {};

  useEffect(() => {
    //In react debounce is implemented using setTimeout and clearTimeout
    // After each key press, the previous setTimeout is cleared and a new setTimeout is set
    // This way the function is called only after the user stops typing for 300ms
    const s = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(s);
  }, [searchText]);

  const fetchData = async () => {
    // If the search text is already searched, then the results are fetched from the cache
    if (cache[searchText]) {
      setSearchResults(cache[searchText]);
      // If the search text is not searched, then the results are fetched from the API
    } else {
      // We are adding client=firefox as a hack
      // This is because google blocks requests from unknown clients
      // Below is the API endpoint for google search suggestions
      const data = await fetch(
        "https://www.google.com/complete/search?client=firefox&q=" + searchText
      );
      const json = await data.json();
      console.log(json[1]);
      cache[searchText] = json[1];
      setSearchResults(json[1]);
    }
  };

  return (
    <div className="m-10">
      <input
        type="text"
        className=" border border-black p-2 w-96 shadow-lg"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        // When the input is focused, the search results are visible
        onFocus={() => setIsResultVisible(true)}
        // When the input is blurred, the search results are not visible
        onBlur={() => setIsResultVisible(false)}
      />
      {searchResults.length > 1 && isResultVisible && (
        <ul className="p-2 border border-black w-96 shadow-lg">
          {searchResults.map((r) => (
            <li className="hover:bg-gray-200 cursor-pointer" key={r}>
              {r}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default SearchUi;
