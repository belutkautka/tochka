
import styles from './menu.module.css'
import Menu from '../../../public/Filled/Lightning.svg'
import Home from '../../../public/Filled/Home.svg'
import History from '../../../public/Filled/History.svg'
import Payments from '../../../public/Filled/Payments.svg'
import Widget from '../../../public/Filled/Widget.svg'
import Chat from '../../../public/Filled/Chat.svg'
import Bell from "../../../public/Stroked/Bell.svg";

function MenuPage() {
    return (
        <>
        <div className={styles.menu}>
            <div>
            <img  src={Home} height='30px' alt="Главная"/>
                <div className={styles.text}>Главная</div>
            </div>
            <div className={styles.history}>
                <div>
                <img  src={History} height='30px' alt="История"/>
                <div className={styles.text__history}>История</div>
                </div>
                <div className={[styles.circle, styles.circle__small].join(" ")}/>
            </div>
            <div>
            <img  src={Payments} height='30px' alt="Платежи"/>
                <div className={styles.text}>Платежи</div>
            </div>
            <div>
                <img  src={Widget} height='30px' alt="Сервисы"/>
                <div className={styles.text}>Сервисы</div>
            </div>
            <div>
                <img  src={Chat} height='30px' alt="Чат"/>
                <div className={styles.text}>Чат</div>
            </div>
        </div>
            <div className={styles.menu__button}>
            <img  src={Menu} height='20px' alt="Меню"/>
            </div>
        </>
    );
}
export default MenuPage;
