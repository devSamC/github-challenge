import React from 'react'

function User({url}) {
    return (
        <img src={url} className="user-avatar" alt="github-user-avatar"/>
    )
}

export default User