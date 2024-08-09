import styles from './main-page.module.css'
import History from "./history.tsx";

function MainPage() {
    return (
        <div className={styles.content}>
            <div className={[styles.left_menu, styles.menu].join(' ')}>Левое меню</div>
            <History/>
            <div className={[styles.right_menu, styles.menu].join(' ')}>Виджеты</div>
        </div>
    );
}

export default MainPage;
