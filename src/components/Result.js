import React from 'react'
import { selectRepo } from './actions'
import { useDispatch } from 'react-redux'
import { GoRepoForked, GoTelescope, GoIssueOpened, GoMarkGithub } from "react-icons/go";




function Item({ repo }) {
    const dispatch = useDispatch()


    return (
        <div className="repo-container">
            <h3><GoMarkGithub/>{repo.name}</h3>
            <div className="git-icons-container">
                <p><GoRepoForked /> {repo.forks}</p>
                <p><GoTelescope /> {repo.stargazers_count}</p>
                <p><GoIssueOpened /> {repo.open_issues}</p>
            </div>
        </div>
    )
}

function Result({ result }) {
    const resultList = result.map(item => <Item repo={item} />)
    return (
        <ul className="result-container">{resultList}</ul>
    )
}

export default Result