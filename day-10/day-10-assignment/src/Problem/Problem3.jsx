import React, { useState, useMemo } from 'react';

const HeavyComputationComponent = ({ items }) => {
  const [filterTerm, setFilterTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  // Memoize the filteredItems array to avoid recalculating it on every render
  const filteredItemsMemo = useMemo(() => {
    console.time('filteringTime');  // start time
    const filtered = items.filter(item => item.toLowerCase().includes(filterTerm.toLowerCase()));
    console.timeEnd('filteringTime'); //end time
    return filtered;
  }, [items, filterTerm]);

  // Update filteredItems when filterTerm changes
  useMemo(() => {
    setFilteredItems(filteredItemsMemo);
  }, [filteredItemsMemo]);

  // Handler function to update the filter term
  const handleFilterChange = (e) => {
    setFilterTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter filter term"
        value={filterTerm}
        onChange={handleFilterChange}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeavyComputationComponent;
