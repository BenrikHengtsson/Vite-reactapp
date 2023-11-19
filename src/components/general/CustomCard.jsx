import React from 'react'


const CustomCard = ({ imageUrl, title, text1 ,text2 }) => {
  return (
    <div className="custom-card">
    <div className="image-container">
      <img src={imageUrl} alt="Card Image" />
    </div>
    <div className="content-container">
      <h4>{title}</h4>
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  </div>
  )
}

export default CustomCard