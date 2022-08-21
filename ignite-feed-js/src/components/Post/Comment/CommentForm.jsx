import { useState } from 'react';
import styles from './CommentForm.module.css';

export function CommentForm({onSubmit}) {

    const [newCommentText, setNewCommentText] = useState('');

    function handleOnSubmit(){
        onSubmit(newCommentText);
        setNewCommentText('');
    }

    function handleCommentFieldChange(){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleCommentFieldInvalid(){
        event.target.setCustomValidity('This field cannot be empty');
    }

    const isCommentInputEmpty = newCommentText.length === 0;
    return (
        <form className={styles.commentForm} onSubmit = {handleOnSubmit}>
            <strong>Leave your feedback</strong>

            <textarea
                name='commentField'
                value={newCommentText}
                onChange={handleCommentFieldChange}
                placeholder='Leave your comment'
                onInvalid={handleCommentFieldInvalid}
                required
            />
            <footer>
                <button type='submit' disabled={isCommentInputEmpty}>Publish</button>
            </footer>
        </form>
    );
}