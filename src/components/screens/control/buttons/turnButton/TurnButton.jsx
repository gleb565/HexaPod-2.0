import styles from './TurnButton.module.scss'
import { RiArrowTurnBackFill } from "react-icons/ri";

function TurnButton() {
    return (
        <div>
             <RiArrowTurnBackFill className={styles.left}/>
             <RiArrowTurnBackFill className={styles.right}/>
        </div>
    )
}
export default TurnButton