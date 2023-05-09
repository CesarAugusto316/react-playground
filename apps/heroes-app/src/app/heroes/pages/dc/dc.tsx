import styles from './dc.module.scss';



interface DCProps {

}

export function DC({ }: DCProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h1>Welcome to DC!</h1>
    </div>
  );
}

export default DC;
