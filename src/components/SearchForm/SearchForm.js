import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateSearchString, getSearchString } from '../../redux/searchStringRedux.js';

const SearchForm = () => {
    const searchString = useSelector(getSearchString);

    const dispatch = useDispatch();
    const [string, setString] = useState('');
    
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(string));
    };



    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder={searchString}  onChange={e => setString(e.target.value)} value={string}/>
            <Button><span className="fa fa-search" /></Button>
        </form>
    );
  };

  export default SearchForm;