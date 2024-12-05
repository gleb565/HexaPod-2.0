import VideoStream from '../control/videoStream/VideoStream';
import ConnectionButton from './buttons/connectionButton/ConnectionButton';
import OffButton from './buttons/offButton/OffButton';
import TurnButton from './buttons/turnButton/TurnButton';
import ControlPlace from './controlPlace/ControlPlace';

function Control() {
    return (
        <div>
            <VideoStream />
            <ControlPlace />
            <TurnButton />
            <ConnectionButton />
            <OffButton />
        </div>
    );
}

export default Control;