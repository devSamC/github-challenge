import React from 'react'

function User({url}) {
    return (
        <img src={url} className="userImg" alt="github-user-avatar"/>
    )
}

export default User