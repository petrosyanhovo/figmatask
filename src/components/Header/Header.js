import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <header className='header'>
      <div className="logo">
        <a className="cards">
          <div className="first-card"></div>
          <div className="second-card"></div>
          <i class="fa-solid fa-cards-blank"></i>
        </a>
        <div className="logo-text">New era of<br/>crypto games</div>
      </div>
      <div className="center">
        <div className="smart-chain">
          <div className="smart-chain-icon">
            <i class="fa-solid fa-dice-d6"></i>
          </div>
          <div className="smart-chain-text">
            Smart Chain
          </div>
        </div>
        <div className="balance">
          <div className="wallet">
            <div className="wallet-icon">
              <i class="fa-solid fa-wallet"></i>
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
          <i class="fa-regular fa-circle-user"></i>
        </div>
        <div className="logout">
          <i class="fa-solid fa-right-from-bracket"></i>
        </div>
      </div>
      <div className="search">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </header>
  )
}

export default Header