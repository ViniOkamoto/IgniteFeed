import { format, formatDistanceToNow } from 'date-fns';
import { enCA } from 'date-fns/locale';
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from '../../shared/Avatar';
import styles from './Comment.module.css';

export function Comment({ comment, deleteComment }) {

    const [commentLikes, setCommentLikes] = useState(comment.likes);

    const [hasUserLike, setUserLike] = useState(comment.hasUserLike);
    const publishedDateFormatted = format(comment.publishedAt, "do LLLL 'at' h:mmaaaa", {
        locale: enCA,
    })

    const publishedDateRelativeNow = formatDistanceToNow(comment.publishedAt, {
        locale: enCA,
        addSuffix: true,
    })

    function handleLikeClick() {
        const hasLike = hasUserLike ? false : true;
        setUserLike(hasLike);
        setCommentLikes((state) => {
            if (hasLike) {
                return state + 1;
            }
            return state - 1;
        });

    }

    function handleDeleteComment() {
        deleteComment(comment);
    }


    return (

        <div className={styles.comment}>
            <Avatar
                src={comment.author.avatarUrl}
                alt={comment.author.name}
                hasBorder={false} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{comment.author.name}</strong>
                            <time title={publishedDateFormatted}
                                dateTime={comment.publishedAt.toISOString()}>{publishedDateRelativeNow}
                            </time>

                        </div>
                        <button
                            onClick={handleDeleteComment}
                            title="Delete Comment">
                            <Trash size={20} />
                        </button>
                    </header>


                    <p>{comment.comment}</p>
                </div>


                <footer>
                    <button onClick={handleLikeClick} className={hasUserLike ? styles.thumbWithLike : styles.thumbWithoutLike}>
                        <ThumbsUp />
                        Curtir <span>{commentLikes}</span>
                    </button>
                </footer>
            </div>

        </div>
    );
}