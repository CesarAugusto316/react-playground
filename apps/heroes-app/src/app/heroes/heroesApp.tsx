import { FC } from 'react';

// components
import { Navbar } from './shared';
import { Outlet } from 'react-router-dom';

// assets
import styles from './heroesApp.module.scss';



export const HeroesApp: FC = () => {
  return (
    <div className={styles.app}>
      <Navbar />

      <Outlet />
    </div>
  );
};

export default HeroesApp
