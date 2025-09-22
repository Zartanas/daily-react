import styles from './TrafficLight.module.scss'
import {useState} from "react";

const trafficLights = [{id: 1, color: 'red'},
  {id: 2, color: 'yellow'}, {id: 3, color: 'green'},]

export const TrafficLight = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [buttonName, setButtonName] = useState('Start')

  const nextLight = () => {
    setActiveIndex((prev) => (prev + 1) % trafficLights.length)
    setButtonName('Next')
  }

  return (
    <div className={styles.TrafficLight}>
      {
        trafficLights.map((light, index) => {
          return (
            <div
              key={light.id}
              className={styles.round}
              style={{
                backgroundColor: index === activeIndex ? light.color : 'grey'
              }}
            ></div>
          )
        })
      }

      <button
        type="button"
        onClick={nextLight}
      >
        {buttonName}
      </button>
    </div>
  )
}