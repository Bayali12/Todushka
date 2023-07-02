import React from 'react';

import { formatDate } from './helpers';

import styles from './styles.module.scss';

type DateComponentProps = {
  date: string;
};

const DateComponent: React.FC<DateComponentProps> = ({ date }) => {
  const formattedDate = formatDate(new Date(date));
  return <span className={styles.date}>{formattedDate}</span>;
};

export default DateComponent;
