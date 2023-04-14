import React from 'react';
import Button from '@mui/material/Button';
import styles from './QuoteFeed.module.css';

function QuoteCard({ text, author }) {
  return (
    <div className={styles['quote-card']}>
      <p className={styles['quote-card__text']}>{text}</p>
      <p className={styles['quote-card__author']}>{author}</p>
      <Button variant="contained" color="primary">
        Read More
      </Button>
    </div>
  );
}

export default QuoteCard;
