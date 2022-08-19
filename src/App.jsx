import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post/Post.jsx';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: ' 👉 jane.design/doctorcare' },
      { type: 'markdown', content: '#novoprojeto' },
      { type: 'markdown', content: '#nlw' },
      { type: 'markdown', content: '#rocketseat' },
    ],
    publishedAt: new Date('2022-08-19 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/viniokamoto.png',
      name: 'Vinicius Okamoto',
      role: 'Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: ' 👉 jane.design/doctorcare', url: '#' },
      { type: 'markdown', content: '#novoprojeto' },
      { type: 'markdown', content: '#nlw' },
      { type: 'markdown', content: '#rocketseat' },
    ],
    publishedAt: new Date('2022-08-17 20:00:00'),
  },
]
export function App() {

  const renderedPosts = posts.map(post => <Post 
    key={post.id}
    author={post.author} 
    content={post.content} 
    publishedAt={post.publishedAt} 
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
