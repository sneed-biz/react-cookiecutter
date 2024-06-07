import React from 'react';

const data = [
  { id: 1, name: 'John Doe', age: 28, position: 'Developer' },
  { id: 2, name: 'Jane Smith', age: 34, position: 'Designer' },
  { id: 3, name: 'Mike Johnson', age: 45, position: 'Manager' },
  // Add more data as needed
];

const Table = ({ searchQuery }) => {
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Position</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.position}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
