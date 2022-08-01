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
            <div className="users">
                <div className="users-img"></div>
                span
            </div>
            <div className="loves">
                <div className="loves-img"></div>

            </div>
        </div>
    </div>
  )
}

export default Profile