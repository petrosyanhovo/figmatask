import React from 'react'
import "./profile.css"

const Profile = () => {
  return (
    <div className='profile'>
        <div className="profile-avatar">
            <img src={require('../../svg/profile-avatar.svg').default} alt="" />
        </div>
        <div className="profile-balance">
            <h2>ID 363024</h2>
            <div className="wallet">
                <img src={require('../../svg/wallet-grey.svg').default} alt="" />
                <span>0xB35d53...9914</span>
            </div>
        </div>
        <div className="profile-info">
            <div className="arrow left-arrow">
                <img src={require('../../svg/left-arrow.svg').default} alt="" />
            </div>
            <div className="users">
                <div className="users-img circle">
                    <img src={require('../../svg/users-icon.svg').default} alt="" />
                </div>
                <span>5.5K</span>
            </div>
            <div className="line"></div>
            <div className="loves">
                <div className="loves-img circle">
                    <img src={require('../../svg/heart-icon.svg').default} alt="" />
                </div>
                <span>103K</span>
            </div>
            <div className="arrow right-arrow">
                <img src={require('../../svg/right-arrow.svg').default} alt="" />
            </div>
        </div>
        <div className="profile-back">
            <div className="info">
                <h4>Your profit:</h4>
                <h2>56.054 BNB</h2>
                <div className="button">
                    <button>
                        <img src={require('../../svg/plus.svg').default} alt="" />
                        Show my cars
                    </button>
                </div>
            </div>
            <div className="back">
                <img src={require('../../svg/profile-back.svg').default} alt="" />
                <div className="back">
                    <img src={require('../../svg/profile-back2.svg').default} alt="" />
                </div>
                <div className="path">
                    <img src={require('../../svg/profile-path.svg').default} alt="" />
                    <div className="circle">
                        <img src={require('../../svg/profile-circle.svg').default} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Profile