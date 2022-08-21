import { useState, ChangeEvent, InvalidEvent, FormEvent } from 'react';
import styles from './CommentForm.module.css';

interface CommentFormProps {
    onSubmit: (event: FormEvent, newComment: string) => void;
}
export function CommentForm({onSubmit}: CommentFormProps) {

    const [newCommentText, setNewCommentText] = useState('');

    function handleOnSubmit(event: FormEvent){
        onSubmit(event, newCommentText);
        setNewCommentText('');
    }

    function handleCommentFieldChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function handleCommentFieldInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('This field cannot be empty');
    }

    const isCommentInputEmpty = newCommentText.length === 0;
    return (
        <form className={styles.commentForm} onSubmit = {handleOnSubmit}>
            <strong>Deixe seu feedback</strong>

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