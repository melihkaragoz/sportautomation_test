// @ts-ignore
import styles from './admin.css';

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div>
            <div className={styles.banner}>
                <h3><b>Admin Paneli</b></h3>
            </div>
            {children}
        </div>
    );
}