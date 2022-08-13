import React, { useState } from 'react'
import style from './style.module.css'
import searchicon from './search.svg'
import { useDispatch } from 'react-redux'
import { bookAction } from '../../../configs/redux/actions/bookAction'

const Header = () => {
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')
  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(bookAction(search))
  }
  return (
    <header className={style.header}>
        <div className={style.logo}>
            My Books
        </div>
        <div className={style.menu}>
            <ul>
                <li>Find Book</li>
                <li>About</li>
            </ul>
        </div>
        <div className={style.search}>
          <div className={style.input}>
            <form onSubmit={(e) => handleSearch(e)}>
              <input type="search" placeholder='Search' name="search" id="" onChange={(e) => setSearch(e.target.value)}/>
            </form>
            <img src={searchicon} alt="" />
          </div>
        </div>
        <div className={style.navbar}>
          <img src="https://aikidojo.lv/wp-content/uploads/2019/08/nophoto.jpg" alt="" />
          <button>Logout</button>
        </div>
    </header>
  )
}

export default Header