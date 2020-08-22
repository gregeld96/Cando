import React from 'react'

function OnlineMember({user}) {
    return (
        <div className="online">
            
            <img className="profile-picture" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvyDUUx4x7Iu6xetTkfi_LwDDzfNnJDn-S0Q&usqp=CAU" />
            <div className="name-dot">
                <p className="name">{user.name}</p>
                <div className="dot"></div>
            </div>
        </div>
    )
}

export default OnlineMember