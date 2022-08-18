import styles from './CommentForm.module.css';

export function CommentForm() {
    return (
        <form className={styles.commentForm} action="">
            <strong>Deixe seu feedback</strong>

            <textarea
                placeholder='Leave your comment'
            />
            <footer>
                <button type='submit'>Publish</button>
            </footer>
        </form>
    );
}