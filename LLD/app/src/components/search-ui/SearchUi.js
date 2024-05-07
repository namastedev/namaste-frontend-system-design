import { useEffect, useState } from "react";

const SearchUi = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    //Debouncing
    const s = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(s);
  }, [searchText]);

  const fetchData = async () => {
    if (cache[searchText]) {
      setSearchResults(cache[searchText]);
    } else {
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
        onFocus={() => setIsResultVisible(true)}
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
