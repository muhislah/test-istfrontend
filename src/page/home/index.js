import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/module/card'
import Header from '../../components/module/headers'
import { bookAction } from '../../configs/redux/actions/bookAction'
import style from './style.module.css'

const Home = () => {
  const dispatch = useDispatch()
  const { books: { books : {items} } } = useSelector(state => state)
  useEffect(() => {
    dispatch(bookAction())
  },[])
  return (
    <>
      <Header />
      <div className={style.body}>
        <div className={style.container}>
          <h1>List Book</h1>
          <div className={style.books}>
            { items && items.length > 0 ? (
              items.map((data) => {
                return <Card title={data.volumeInfo.title} image={data.volumeInfo.imageLinks?.thumbnail || undefined}/>
              })
            ) : <p>No Book Available</p> }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home