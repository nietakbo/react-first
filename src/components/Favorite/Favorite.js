import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux.js';
import Card from '../Card/Card';
import styles from './Favorite.module.scss'

const Favorite = () => {
  const cards = useSelector(getFavoriteCards);
  if (cards.length === 0) {
    return (
      <>
        <PageTitle>Favorite</PageTitle>
        <h2 className={styles.column}>No favorite cards...</h2>
      </>
    );
  } else {
    return (
      <>
        <PageTitle>Favorite</PageTitle>
        <article className={styles.column}>
          <ul className={styles.cards}>
            {cards.map(card => (
              <Card key={card.id} {...card} />
            ))}
          </ul>
        </article>
      </>
    );
  }
  };

  export default Favorite;