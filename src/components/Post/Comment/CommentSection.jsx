import { useState } from "react";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";
import styles from "./CommentSection.module.css";

export function CommentSection({postComments}) {

    const [comments, setComments] = useState(postComments);

    function handleCreateNewComment(newComment) {
        event.preventDefault();
        setComments([...comments,{
            id:1,
            publishedAt: new Date(),
            author: {
              avatarUrl: 'https://github.com/viniokamoto.png',
              name: 'Vinicius Okamoto',
              role: 'Software Engineer',
            },
            comment: newComment,
            likes: 15,
            hasUserLiked: true,
          }]);
    }

    return (
        <>
            <CommentForm onSubmit={handleCreateNewComment} />
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment comment={comment}/>;
                })}
            </div>
        </>
    );
}