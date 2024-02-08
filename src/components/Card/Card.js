import styles from './Card.module.scss';
import ButtonFav from '../ButtonFav/ButtonFav';

const Card = ({title,id,isFavorite}) => {
    return (
        <span>
      <li className={styles.card}>
        {title}
        <ButtonFav isFavourite={isFavorite} id={id} />
      </li>
        </span>
    );
};

export default Card;