import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <header className='header'>
      <div className="left-lines">
        <img src={require('../../svg/leftlines.svg').default} alt="" />
      </div>
      <div className="logo">
        <a className="cards">
          <img src={require('../../svg/cards.png')} alt="" />
        </a>
        <div className="logo-text">New era of<br/>crypto games</div>
      </div>
      <div className="center">
        <div className="smart-chain">
          <div className="smart-chain-icon">
            <img src={require('../../svg/binancedex.svg').default} alt="" />
          </div>
          <div className="smart-chain-text">
            Smart Chain
          </div>
        </div>
        <div className="balance">
          <div className="wallet">
            <div className="wallet-icon">
              <img src={require('../../svg/wallet.svg').default} alt="" />
            </div>
            <div className="balance-money">
              5.621 BNB
            </div>
          </div>
          <div className="num">
            0xB2...31
          </div>
        </div>
      </div>
      <div className="user">
        <div className="user-id">ID #3241</div>
        <div className="avatar">
          <img src={require('../../svg/user.svg').default} alt="" />
        </div>
       
      </div>
      <div className="search">
        <img src={require('../../svg/search.svg').default} alt="" />
      </div>
    </header>
  )
}

export default Header