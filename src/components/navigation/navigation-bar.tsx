import TochkaLogo from '../../../public/Logo.svg';
import Bell from '../../../public/Stroked/Bell.svg';
import Logout from '../../../public/Stroked/Logout.svg';
import InviteMan from '../../../public/Stroked/Invite Man.svg';
import Settings from '../../../public/Common/Stroked/Gear.svg';
import styles from './navigation-bar.module.css';


function NavigationBar() {
    return (
        <div className={styles.nav_bar}>
            <div className={styles.logo}>
                <img src={TochkaLogo} alt="Точка банк"/>
                <div className={styles.circle}/>
            </div>

            <div className={styles.pages}>
                <h3 className={styles.page}>Главная</h3>
                <h3 className={styles.page}>Платежи</h3>
                <h3 className={styles.page}>Сервисы</h3>
            </div>
            <div className={styles.icons}>
                <div className={styles.bell}>
                    <img src={Bell} alt="Уведомления" height='24px'/>
                    <div className={[styles.circle, styles.circle__small].join(" ")}/>
                </div>
                <img className={styles.icon} src={InviteMan} alt="Пригласи друга" height='24px'/>
                <img src={Settings} alt="Пригласи друга" height='24px'/>
                <img className={styles.icon} src={Logout} alt="Выход" height='24px'/>
            </div>
        </div>
    );
}

export default NavigationBar;
