import styles from './Post.module.css';

export function Post() {

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://avatars.githubusercontent.com/u/53801461?v=4" />
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
                <p>👉 <a href="#">jane.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    );
}