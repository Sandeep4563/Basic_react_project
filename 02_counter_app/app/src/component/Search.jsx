import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');

  const products = ['Apple', 'Orange', 'Lemon', 'Soda', 'Custard', 'Tomato'];

  const filteredProducts = products.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Search on the list</h1>
      <input
        type="text"
        placeholder="search here.."
        value={query}
        onChange={function(e) { setQuery(e.target.value); }}
        // onChange={(e) => setQuery(e.target.value)}
      />

      <div>
        <h3>List of products</h3>
        <ul>
          {filteredProducts.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
