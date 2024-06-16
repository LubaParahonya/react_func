import React from 'react';
import clases from './shopItemFunc.module.css';

const ShopItemFunc = (props) => {
    const {brand, title, description, descriptionFull, price, currency} = props.info
  return (
    <div className ={clases["main-content"]}>
  <h2>{brand}</h2>
  <h1>{title}</h1>
  <h3>{description}</h3>
  <div className={clases["description"]}>
    {descriptionFull}
  </div>
  <div className ={clases["highlight-window mobile"]}><div className ={clases["highlight-overlay"]}></div></div>
  <div className ={clases["divider"]}></div>
  <div className ={clases["purchase-info"]}>
    <div className ={clases["price"]}>{price}{currency}</div>
    <button>Добавить в корзину</button>
  </div>
</div>
  )
}

export default ShopItemFunc
