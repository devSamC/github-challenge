import React from 'react'
import { useSelector } from 'react-redux'
import { GoRepoForked, GoTelescope, GoIssueOpened} from "react-icons/go";

function Item({ repo }) {
    
    const username = useSelector(state => state.user.name);
    const url = `https://github.com/${username}/${repo.name}`
    return (
        <div className="repo-container">
        <a href={url} target="_blank" rel="noreferrer">
        <h3>{repo.name}</h3>
        </a>
        <div className="git-icons-container">
            <p><GoRepoForked /> {repo.forks}</p>
            <p><GoTelescope /> {repo.stargazers_count}</p>
            <p><GoIssueOpened /> {repo.open_issues}</p>
        </div>
       
    </div>
    )
}

function RepoCont({result}) {
    const resultList = result.map(item => <Item repo={item} />)
    return (
        <ul className="result-container">{resultList}</ul>
    )
}

export default RepoCont