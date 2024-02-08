import clsx from 'clsx';
import styles from './ButtonFav.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const ButtonFav = ({ id, isFavourite }) => {
  const [isFav, setIsFav] = useState(isFavourite);
  const dispatch = useDispatch();

  const swap = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(id));
    setIsFav(!isFav);
  };


  return (
    <div>
      <button onClick={swap} className={clsx('fa fa-star-o', styles.fav, { [styles.isFav]: isFavourite})}></button>
    </div>
  );
};
export default ButtonFav;