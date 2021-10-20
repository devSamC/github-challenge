import React from 'react'
import {Link} from 'react-router-dom'
import { selectRepo } from '../../actions'
import { useDispatch } from 'react-redux'

function Item({ repo }) {
    const dispatch = useDispatch()

    function handleClick(repo) {
        console.log(repo)
        dispatch(selectRepo(repo))
    }

    return (
        <div className="repo-container">
            <h3>{repo.name}</h3><Link onClick={() => handleClick(repo.name)} to={'/info'}>see collaborators...</Link>
            <div className="git-icons-container">
                <p> {repo.forks}</p>
                <p> {repo.stargazers_count}</p>
                <p> {repo.open_issues}</p>
            </div>
        </div>
    )
}

function RepoCont({ result }) {
    const resultList = result.map(item => <Item repo={item} />)
    return (
        <ul className="result-container">{resultList}</ul>
    )
}

export default RepoCont