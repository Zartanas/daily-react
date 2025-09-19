import styles from './Counter.module.scss'
import {useState} from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0)

  const onPlusClickHandler = () => {
    setCounter((prevValue) => prevValue + 1)
  }

  const onMinusClickHandler = () => {
    setCounter((prevValue) => prevValue - 1)
  }

  const onDeleteClickHandler = () => {
    setCounter(0)
  }

  return (
    <div className={styles.Counter}>
      <h1 className={styles.Number}>{counter}</h1>
      <div className={styles.ButtonsMenu}>
        <button
          className={styles.Button}
          type="button"
          onClick={onPlusClickHandler}
        >
          +1
        </button>

        <button
          className={styles.Button}
          type="button"
          onClick={onMinusClickHandler}
        >
          -1
        </button>

        <button
          className={styles.Button}
          type="button"
          onClick={onDeleteClickHandler}
        >
          Delete
        </button>
      </div>
    </div>
  )
}