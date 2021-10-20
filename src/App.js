import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm/SearchForm';
import { getResult } from './actions';
import RepoCont from './components/RepoCont';
import User from './components/User/user';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./components/NightDayMode/Colours"
import {CgSun} from "react-icons/cg"
import { GoMarkGithub } from "react-icons/go";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const result = useSelector(state => state.user.repos);

  const username = useSelector(state => state.user.name);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error)
  console.log("error on app.js" + error);

  const dispatch = useDispatch();

  const search = searchTerm => dispatch(getResult(searchTerm));

  const renderResult = () => loading ? <p className="info-container">Loading . . .</p> : <RepoCont result={result} />

  const [theme, setTheme] = useState("light")

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }


  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
        <StyledApp className="App">
          <Navbar />
          <h1>Hello there</h1> <div onClick={themeToggler}><CgSun /></div> 

          <div id="search">
            <SearchForm getResult={search} />

            <div className="user-info">
              {username && <h1 className="octoface"><span>{username}</span></h1>}
              {result.length > 0 ? <User url={result[0].owner.avatar_url} /> : null}
            </div>
            {error ? <p className="info-container error" role="alert">Oops there's been an error! {error}</p> : renderResult()}

          </div>
        </StyledApp>
      
    </ThemeProvider>
  );
}

export default App;
