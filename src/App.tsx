import { useState } from 'react';
import styles from './App.module.scss'

export function App() {
  const [count, setCount] = useState(0);

  return (
    <main className={styles.contentWrapper}>
      <h1>Hello world</h1>
    </main>
  );
}
