import { useState } from 'react';
import styles from './CommentForm.module.css';

export function CommentForm({onSubmit}) {

    const [newCommentText, setNewCommentText] = useState('');

    function handleOnSubmit(){
        onSubmit(newCommentText);
        setNewCommentText('');
    }

    function handleCommentFieldChange(){
        console.log('bateu');
        setNewCommentText(event.target.value);
    }
    return (
        <form className={styles.commentForm} onSubmit = {handleOnSubmit}>
            <strong>Deixe seu feedback</strong>

            <textarea
                name='commentField'
                value={newCommentText}
                onChange={handleCommentFieldChange}
                placeholder='Leave your comment'
            />
            <footer>
                <button type='submit'>Publish</button>
            </footer>
        </form>
    );
}