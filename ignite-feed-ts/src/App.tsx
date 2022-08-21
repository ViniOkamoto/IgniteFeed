import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post/Post.jsx';
import { PostInterface } from './models/PostInteface';
import { LinkContentInterface } from './models/ContentInterface';
import { posts } from './assets/utils';

export function App() {

  const renderedPosts = posts.map(post => <Post 
    key={post.id}
    author={post.author} 
    content={post.content} 
    publishedAt={post.publishedAt}
    comments ={post.comments} 
  />);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {renderedPosts}
        </main>
      </div>
    </>
  )
}
