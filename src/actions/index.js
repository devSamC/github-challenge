import axios from 'axious'

export const setTheme = mode => ({ type: 'SET_MODE', payload: mode})
export const toggleTheme = () => ({type: 'TOGGLE_MODE'})
export const selectRepo = repo => ({type: 'SELECT_REPO', payload: repo})

const loading = username => ({type: 'LOADING', payload: username})

const loadResult = (results) => ({type: 'LOAD_RESULT', payload: results})

const getRepositories = async username =>  {
    try {
        const {data} = axios.get(`https://api.github.com/users/${username}/repos`);
        return data
    }
    catch (err) {
        if (data.status === 404) { throw Error('That\'s not a valid Github Username!') }
        throw new Error(err.message)
    }

}

export const getResult = searchTerm => {
    return async dispatch => {
        dispatch(loading(searchTerm));
        try {
            const result = await getRepositories(searchTerm);
            dispatch(loadResult({result, searchTerm}))
        }
        catch(err) {
            console.warn(err.message)
            dispatch({type: 'SET ERROR', payload: err.message})
        }
    }
}