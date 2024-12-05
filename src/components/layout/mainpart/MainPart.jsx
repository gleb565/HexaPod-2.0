import styles from './MainPart.module.scss'
import Time from './time/Time.jsx'
import BatteryStatus from './battery/BatteryStatus.jsx'
import Connection from '../mainpart/connection/Connection.jsx'


function MainPart(){
    return (
        <section className={styles.header}>
            <section className={styles.time}>
                <Time />
                <BatteryStatus />
                <Connection />
            </section>
        </section>
    )
}
export default MainPart