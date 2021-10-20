import React, { useState } from 'react';

function SearchForm({ getResult }) {

    const [username, setUsername] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        getResult(username)
        setUsername("")
    }

    const updateInput = e => {
        const input = e.target.value
        setUsername(input)
    }

 

    return (
        <>
            <form aria-label="search-form" onSubmit={handleSubmit}>
                <label htmlFor="username" value="username"></label>
                <div className ="search" >
                    <input className="searchBar" autoComplete="off" type="text" id="username" value={username} placeholder="search for github user..." onChange={updateInput} />
                    <input type="submit" name="search" value="🔍" />
                </div>
            </form>
        </>
    );
};

export default SearchForm;