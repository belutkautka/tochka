
import styles from './menu.module.css'
import Menu from '../../../public/Filled/Lightning.svg'
import Home from '../../../public/Filled/Home.svg'
import History from '../../../public/Filled/History.svg'
import Payments from '../../../public/Filled/Payments.svg'
import Widget from '../../../public/Filled/Widget.svg'
import Chat from '../../../public/Filled/Chat.svg'

function MenuPage() {
    return (
        <>
        <div className={styles.menu}>
            <img  src={Home} height='30px' alt="Главная"/>
            <img  src={History} height='30px' alt="История"/>
            <img  src={Payments} height='30px' alt="Платежи"/>
            <img  src={Widget} height='30px' alt="Виджеты"/>
            <img  src={Chat} height='30px' alt="Чат"/>
        </div>
            <div className={styles.menu__button}>
            <img  src={Menu} height='20px' alt="Меню"/>
            </div>
        </>
    );
}
export default MenuPage;
