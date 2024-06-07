import React, { useState } from 'react';
import { CSVLink } from 'react-csv';

const SearchPage = ({ users }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Age', key: 'age' },
    { label: 'Position', key: 'position' },
  ];

  const handleExportJson = () => {
    const json = JSON.stringify(filteredUsers, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'search_results.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container">
      <h2>Search Users</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="export-buttons">
        <CSVLink data={filteredUsers} headers={headers} filename="search_results.csv">
          <button type="button">Export as CSV</button>
        </CSVLink>
        <button type="button" onClick={handleExportJson}>
          Export as JSON
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchPage;
