import React from 'react'
import image from '../../assets/svgs/grid-01.svg'
import img from '../../assets/images/s.png'
import '../../styles/form/cardStyle.css'

function Card(props) {
  return (
    <div className={props.className}>
      <img alt="grid" src={image} className={props.gridClass} />
      <img src={img} alt="" className={props.class} />
    </div>
  );
}

export default Card