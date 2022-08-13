import React from 'react'
import style from './style.module.css'
import noimage from './noimage.png'

const Card = ({image, title}) => {
  return (
    <div className={style.cards}>
      <div className={style.card}>
        <img src={image || noimage} alt="" />
      </div>
      <p>{title}</p>
    </div>
  )
}

export default Card