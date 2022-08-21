import { FormEvent, useState } from "react";
import { CommentInterface } from "../../../models/Comment";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";
import styles from "./CommentSection.module.css";

interface CommentSectionProps {
    postComments: CommentInterface[];
}
export function CommentSection({postComments}: CommentSectionProps) {

    const [comments, setComments] = useState(postComments);

    function handleCreateNewComment(event: FormEvent, newComment: string) {
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

    function deleteComment(commentToDelete: CommentInterface){
        const newCommentsList:CommentInterface[] = comments.filter(comment =>{
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