import React from 'react'

const Table = (props) => {
  return (
    <table className='table custom-table'>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Название</th>
          <th>Дистанция</th>
          <th>Количество</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.data}</td>
              <td>{item.name}</td>
              <td>{item.distance}</td>
              <td>{item.quantity}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Table
