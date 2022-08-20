import styles from './CommentForm.module.css';

export function CommentForm({onSubmit}) {

    return (
        <form className={styles.commentForm} onSubmit = {onSubmit}>
            <strong>Deixe seu feedback</strong>

            <textarea
                name='commentField'
                placeholder='Leave your comment'
            />
            <footer>
                <button type='submit'>Publish</button>
            </footer>
        </form>
    );
}