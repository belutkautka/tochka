import styles from './loading.module.css'

function Loading() {
    return (
        <div className={styles.loading}>
            <div className={[styles.header, styles.box].join(" ")}/>
            <div className={styles.filters}>
                <div className={[styles.filter, styles.box].join(" ")}/>
                <div className={[styles.filter, styles.box].join(" ")}/>
                <div className={[styles.filter, styles.box].join(" ")}/>
            </div>
            <div className={styles.events}>
                <div className={[styles.date, styles.box].join(" ")}/>
                <div className={styles.event}>
                    <div className={styles.balance}>
                        <div className={[styles.balance__header, styles.box].join(" ")}/>
                        <div className={[styles.balance__description, styles.box].join(" ")}/>
                    </div>
                    <div className={styles.info}>
                        <div className={[styles.info__element, styles.box].join(" ")}/>
                        <div className={[styles.info__element, styles.box].join(" ")}/>
                    </div>
                    <div className={[styles.icon, styles.box].join(" ")}/>
                </div>
            </div>


        </div>
    );
}

export default Loading;
