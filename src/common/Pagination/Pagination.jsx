import React from 'react'
import style from './Pagination.module.css'

const Pagination = (props) => {
  let list = []
  for (let i = 1; i < props.count + 1; i++) {
    list.push(i)
  }
  let clickHandler = (e) => {
    if (e.target.tagName === 'SPAN') {
      props.setCurrentPage(+e.target.textContent)
    }
  }
  return (
    <div onClick={clickHandler} className={style.pagination}>
      {list.map((i) => (
        <span key={i} className={i == props.currentPage ? style.active : ''}>
          {i}
        </span>
      ))}
    </div>
  )
}

export default Pagination
