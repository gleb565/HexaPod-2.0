import styles from './Left.module.scss';

function Left() {
    // Создаем три массива по 3 элемента
    const entries1 = Array.from({ length: 3 }, (_, index) => index + 1);
    const entries2 = Array.from({ length: 3 }, (_, index) => index + 4);
    const entries3 = Array.from({ length: 3 }, (_, index) => index + 7);

    return (
        <div className={styles.top}>
            <div className={styles.container}>
                <div className={styles.left}>
                    {entries1.map(entry => (
                        <div className={styles.leftFront} key={entry}>
                            <label>Left Front</label>
                            <input type="text" />
                            <div>{entry}</div>
                        </div>
                    ))}
                </div>
                <div className={styles.indent}></div>
                {entries2.map(entry => (
                    <div className={styles.leftFront} key={entry}>
                        <label>Left Middle</label>
                        <input type="text" />
                        <div>{entry}</div>
                    </div>
                ))}
                <div className={styles.indent}></div>
                {entries3.map(entry => (
                    <div className={styles.leftFront} key={entry}>
                        <label>Left Behind</label>
                        <input type="text" />
                        <div>{entry}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Left;