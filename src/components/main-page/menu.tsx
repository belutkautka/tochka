
import styles from './menu.module.css'
import Menu from '../../../public/Filled/Lightning.svg'

function MenuPage() {
    return (
        <>
        <div
            className={styles.menu}>
        </div>
            <div className={styles.menu__button}>
            <img  src={Menu} height='20px' alt="Меню"/>
            </div>
        </>
    );
}
export default MenuPage;
