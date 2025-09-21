import styles from './Timer.module.scss'
import {type ChangeEvent, useEffect, useState} from "react";

export const Timer = () => {
  const [timer, setTimer] = useState(0)
  const [buttonName, setButtonName] = useState('START')

  const buttonStartOnClickHandler = () => {
    setButtonName(buttonName === 'START' ? 'PAUSE' : 'START')
  }

  const onChangeTimerHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value)
    setTimer(newValue)
  }

  useEffect(() => {
    let intervalId: number | undefined

    if (buttonName === 'PAUSE') {
      intervalId = window.setInterval(() => {
        setTimer(prev => prev > 0 ? prev - 1 : 0)
      }, 1000)
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [buttonName])

  return (
    <div className={styles.Timer}>
      <input
        onChange={onChangeTimerHandler}
        placeholder={'Enter your time'}
        id="1"
        name="timeInput"
      />
      <h1>{timer}</h1>
      <button
        onClick={buttonStartOnClickHandler}
        type="button"
      >
        {buttonName}
      </button>
    </div>
  )
}