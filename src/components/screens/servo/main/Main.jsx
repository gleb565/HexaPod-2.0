import styles from './Main.module.scss'
import Left from './left/Left'
import Right from './right/Right'

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.servo}> Servo </div>
            <Left />
            <Right />
        </div>
    )
}
export default Main