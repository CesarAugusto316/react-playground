import { FC } from 'react';
import styles from './marvel.module.scss';



interface MarvelProps {

}

export const Marvel: FC<MarvelProps> = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Marvel!</h1>
    </div>
  );
}

export default Marvel;
