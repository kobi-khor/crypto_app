import React from 'react';
import './Coin.css';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin text-white'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data text-white'>
          <p className='coin-price'>${Number(price).toFixed(3)}</p>
          <p className='coin-volume'>${volume?.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'>{Number(priceChange).toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{Number(priceChange).toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            Mkt Cap: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;