import { FC, useEffect } from 'react';
import { observer } from 'patterns';


// components
import { Navbar } from './shared';
import { Outlet } from 'react-router-dom';

// assets
import styles from './heroesApp.module.scss';



export const HeroesApp: FC = () => {

  useEffect(() => {
    console.log(observer('hello César'))
  }, [])

  return (
    <div className={styles.app}>
      <Navbar />

      <Outlet />
    </div>
  );
};

export default HeroesApp
