
import { format, formatDistanceToNow } from 'date-fns';
import enCA from 'date-fns/locale/en-CA';
import { ContentInterface, LinkContentInterface } from '../../models/ContentInterface.js';
import { PostModel } from '../../models/PostInteface.js';
import { Avatar } from '../shared/Avatar.jsx';
import { Comment } from './Comment/Comment.jsx';
import { CommentForm } from './Comment/CommentForm.jsx';
import { CommentSection } from './Comment/CommentSection.jsx';
import styles from './Post.module.css';

export function Post({
    author,
    content,
    publishedAt,
    comments } : PostModel) {
    const publishedDateFormatted = format(publishedAt, "do LLLL 'at' h:mmaaaa", {
        locale: enCA,
    })

    const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
        locale: enCA,
        addSuffix: true,
    })

    var markDowns:JSX.Element[] = [];

    const contentRendered = content.map(line => {
        if (line.type == 'paragraph') {
            return <p key={line.content}>{line.content}</p>
        }
        if (line.type == 'link') {
            return <p key={line.content}><a href={(line as LinkContentInterface).src}>{line.content}</a></p>
        }
        if (line.type === 'markdown') {
            markDowns.push(<a key={line.content} href='#'>{line.content}</a>);
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
            <CommentSection postComments={comments} />
        </article>
    );
}