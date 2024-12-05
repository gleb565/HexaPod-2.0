import styles from './Right.module.scss';

function Left() {
    // Создаем три массива по 3 элемента
    const entries1 = Array.from({ length: 3 }, (_, index) => index + 10);
    const entries2 = Array.from({ length: 3 }, (_, index) => index + 13);
    const entries3 = Array.from({ length: 3 }, (_, index) => index + 16);

    return (
        <div className={styles.top}>
            <div className={styles.container}>
                <div className={styles.left}>
                    {entries1.map(entry => (
                        <div className={styles.leftFront} key={entry}>
                            <label>Right Front</label>
                            <input type="text" />
                            <div>{entry}</div>
                        </div>
                    ))}
                </div>
                <div className={styles.indent}></div>
                {entries2.map(entry => (
                    <div className={styles.leftFront} key={entry}>
                        <label>Right Middle</label>
                        <input type="text" />
                        <div>{entry}</div>
                    </div>
                ))}
                <div className={styles.indent}></div>
                {entries3.map(entry => (
                    <div className={styles.leftFront} key={entry}>
                        <label>Right Behind</label>
                        <input type="text" />
                        <div>{entry}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Left;