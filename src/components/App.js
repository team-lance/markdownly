import React from 'react';
import Document from './markdown/Document';
import styles from './App.css';

export default function App() {
  return (
    <>
      <h1 className={styles.header}>Markdown Editor</h1>
      <Document />
    </>
  );
}
