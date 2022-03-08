# album search
search to be automatically executed when the search term changes. To do this, we will use a side effect that makes the request whenever the term changes.

We can use axios to fetch data with any view library. When we use it with React, we combine it with the useEffect Hook to create a side effect. The request takes some time and cannot delay the render of the component. When creating effects, it is critical that we identify and declare each dependency.


```jsx
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "components/SearchBar";
import Results from "components/Results";

export default function LiveSearch(props) {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const testURL = `https://itunes.apple.com/search?term=${term}&country=CA&media=music&entity=album&attribute=artistTerm`;
    axios.get(testURL).then(response => {
      console.log(response.data.results);
      setResults([...response.data.results])
    });
  }, [term]);

  return (
    <Fragment>
      <header className="logo">
        <img src="images/brand.png" alt="Brand" />
      </header>
      <main>
        <SearchBar onSearch={term => setTerm(term)} />
        <Results results={results} />
      </main>
    </Fragment>
  );
}

```