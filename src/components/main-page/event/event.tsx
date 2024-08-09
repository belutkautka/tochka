import styles from './event.module.css'
import {IEvent} from "../../../mocks/handlers.ts";
import Bell from "../../../../public/Stroked/Bell.svg";


type EventProps = {
    event: IEvent;
}

function Event({event}: EventProps) {
    return (
        <div className={styles.event}>
            <div className={styles.balance}>{event.balance||'Карты'}</div>
            <div className={styles.info}>
                <div className={[styles.media_balance, styles.balance].join(" ")}>{event.balance||'Карты'}</div>
                <div className={styles.title}>{event.title}</div>
                <div className={styles.description}>{event.description}</div>
                {event.optionalDescription&&<div className={styles.description}>{event.optionalDescription}</div>}
            </div>
            {event.icon&&<img className={styles.icon} src={'../../../../public/'+event.icon} alt="Уведомления" height='34px'/>}


        </div>
    );
}
export default Event;
