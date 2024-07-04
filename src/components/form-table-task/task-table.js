import React from 'react'

const Table = ({
  tableRows = [
    {
      username: "abc",
      password: 123,
    },
    {
      username: "abcd",
      password: 1234,
    },
    {
      username: "abcd",
      password: 1234,
    },
  ]
}) => {
 
  return (
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
  {tableRows.map((each, index) => {
          return (
            <>
              <tr>
                <td>{index + 1}</td>
                <td>{each.username}</td>
                <td>{each.password}</td>
                <td>
                 
                </td>
              </tr>
            </>
          );
        })}
  </tbody>
</table>
  )
}

export default Table
