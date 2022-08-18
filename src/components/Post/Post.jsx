import { Avatar } from '../shared/Avatar.jsx';
import { Comment } from './Comment/Comment.jsx';
import { CommentForm } from './Comment/CommentForm.jsx';
import styles from './Post.module.css';

export function Post() {

    return (
        <article className={styles.post}>
            <header className={styles.postHeader}>
                <div className={styles.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/53801461?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Vinicius Okamoto</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="May 14th at 2pm " dateTime="2022-05-11 08:13:30">Published 1h ago </time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{' '}<a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a></p>
            </div>
            <CommentForm/>
            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    );
}