import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../../shared/Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return (

        <div className={styles.comment}>
            <Avatar 
            src="https://github.com/diego3g.png" 
            alt="User name avatar" 
            hasBorder={false}/>
            
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="May 14th at 2pm " dateTime="2022-05-11 08:13:30">About 2h ago</time>
                        </div>
                        <button title="Delete Comment">
                            <Trash size={20}/>
                        </button>
                    </header>


                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>
                
                
                <footer>
                    <button>
                    <ThumbsUp/>
                    Curtir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    );
}