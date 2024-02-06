import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import TextInput from './../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

const CardForm = props => {
    const dispatch = useDispatch();
    const addCard = payload =>({type: 'ADD_CARD',payload})
    const [title, setTitle] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({ title, shortid }));
        setTitle('');
    };

	return (
        <form onSubmit={handleSubmit} className={styles.cardForm} >
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
	);
};

export default CardForm;