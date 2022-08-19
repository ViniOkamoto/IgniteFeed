
import {format, formatDistanceToNow} from 'date-fns';
import enCA from 'date-fns/locale/en-CA';
import { Avatar } from '../shared/Avatar.jsx';
import { Comment } from './Comment/Comment.jsx';
import { CommentForm } from './Comment/CommentForm.jsx';
import styles from './Post.module.css';

export function Post({key,author, content, publishedAt}) {
   const publishedDateFormatted = format(publishedAt, "do LLLL 'at' h:mmaaaa", {
    locale: enCA,
   })

   const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale:enCA,
    addSuffix: true,
   })

   var markDowns = [];
   const contentRendered = content.map(line => {
    if(line.type == 'paragraph'){
        return <p>{line.content}</p>
    }
    if(line.type == 'link'){
        return <p><a href={line.url}>{line.content}</a></p>
    }
    if(line.type ==='markdown'){
        markDowns.push(<a href='#'>{line.content}</a>);
    }
   })

   
    return (
        <article className={styles.post}>
            <header className={styles.postHeader}>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeNow} </time>
            </header>
            <div className={styles.content}>
               {contentRendered}
               <p>{markDowns.map(markDown => markDown)}</p>
            </div>
            <CommentForm/>
            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    );
}