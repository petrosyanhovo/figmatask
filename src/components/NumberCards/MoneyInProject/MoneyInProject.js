import React from 'react'
import './moneyInProject.css'

const MoneyInProject = () => {
  return (
    <div className='moneyInProject'>
      <h4>Money in project</h4>
      <div className="info">
        <div className="left">
          <div className="line"></div>
          <h3 className='price'>$129,850</h3>
        </div>
        <div className="right">
          <span className="sale">+15%</span>
        </div>
        <div className="dollar">
          <img src={require('../../../svg/dollar.svg').default} alt="" />
        </div>
      </div>
        <div className="backimg">
          <img src={require('../../../svg/moneyinprojline.svg').default} alt="" />
        </div>
    </div>
  )
}

export default MoneyInProject