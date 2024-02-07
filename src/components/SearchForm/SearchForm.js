import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {
    const dispatch = useDispatch();
    const updateSearchString = payload => ({type: 'UPDATE_SEARCHSTRING',payload})
    const [searchString, setSearchString] = useState('');
    
    const handleInputChange = e => {
        setSearchString(e.target.value);
      };
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(searchString));
    };



    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder='Search...' onChange={handleInputChange} value={searchString}/>
            <Button><span className="fa fa-search" /></Button>
        </form>
    );
  };

  export default SearchForm;