import React, { useState } from 'react'
import style from './Sort.module.css'

const Sort = (props) => {
  let [showSort, setShowSort] = useState(false)
  let [inputValue, setInputValue] = useState('')
  let [selectValue, setSelectValue] = useState('name')
  let submit = (e) => {
    e.preventDefault()
    props.filter(e.target[0].value, e.target[1].value, inputValue)
  }
  let val = selectValue === 'name'
  return (
    <div className={style.sort}>
      <button
        onClick={() => setShowSort((showSort = !showSort))}
        className='btn btn-dark btn-lg btn-block mt-5'
      >
        sort by
      </button>
      {showSort ? (
        <div className={style.filter__wrapper}>
          <form onSubmit={submit}>
            <select
              name='column'
              id=''
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <option value='name'>Название</option>
              <option value='quantity'>Количество</option>
              <option value='distance'>Расстояние</option>
            </select>
            <select name='type' id=''>
              {val && <option value='equal'>Равно</option>}
              {!val && <option value='more than'>Больше чем</option>}
              {!val && <option value='less than'>Меньше чем</option>}
              {val && <option value='includes'>Включает</option>}
            </select>

            <input
              required
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type='text'
            />
          </form>
        </div>
      ) : null}
    </div>
  )
}

export default Sort
