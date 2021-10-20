import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm/SearchForm';
import { getResult } from './actions';
import RepoCont from './components/RepoCont';



function App() {
  // const result = useSelector(state => state.user.repos);

  // const username = useSelector(state => state.user.name);
  // const loading = useSelector(state => state.loading);
  // const error = useSelector(state => state.error)

  const dispatch = useDispatch();
  
  const search = searchTerm => dispatch(getResult(searchTerm));

  // const renderResult = () => loading ? <p className="info-container">Loading . . .</p> : <Result result={result}/>

  return (
    <div className="App">
      <Navbar/> 
        <h1>Hello there</h1>
      <SearchForm getResult={search}/>
      <RepoCont/>
    </div>
  );
}

export default App;
