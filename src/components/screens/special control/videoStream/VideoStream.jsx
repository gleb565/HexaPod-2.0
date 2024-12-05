import styles from './VideoStream.module.scss';
import { VscDebugDisconnect } from 'react-icons/vsc';

function VideoStream() {
    return (
        <section className={styles.video}>
            <VscDebugDisconnect style={{fontSize: '20px'}}/>
            <div className={styles.error}>Disconnect</div>
        </section>
    );
}

export default VideoStream;