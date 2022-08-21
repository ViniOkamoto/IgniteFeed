import { useState } from "react";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";
import styles from "./CommentSection.module.css";

export function CommentSection({postComments}) {

    const [comments, setComments] = useState(postComments);

    function handleCreateNewComment(newComment) {
        event.preventDefault();
        setComments([...comments,{
            id: Math.random() * 100,
            publishedAt: new Date(),
            author: {
              avatarUrl: 'https://github.com/viniokamoto.png',
              name: 'Vinicius Okamoto',
              role: 'Software Engineer',
            },
            comment: newComment,
            likes: 0,
            hasUserLike: false,
          }]);
    }

    function deleteComment(commentToDelete){
        const newCommentsList = comments.filter(comment =>{
            return comment != commentToDelete;
        });

        setComments(newCommentsList);
    }
    return (
        <>
            <CommentForm onSubmit={handleCreateNewComment} />
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment 
                    key={comment.id} 
                    comment={comment}
                    deleteComment = {deleteComment}
                    />;
                })}
            </div>
        </>
    );
}