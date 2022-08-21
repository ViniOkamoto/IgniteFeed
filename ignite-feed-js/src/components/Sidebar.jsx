import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './shared/Avatar';

export function Sidebar() {

    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src='https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60' />
            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/53801461?v=4"/>
                <strong>Vinicius Okamoto</strong>
                <span>Web Developer</span>
            </div>
            <footer>

                <a href='#'>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
