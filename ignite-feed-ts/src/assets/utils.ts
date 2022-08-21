import { LinkContentInterface } from "../models/ContentInterface";
import { PostInterface } from "../models/PostInteface";

export const posts: PostInterface[] = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO',
      },
      content: [
        { type: 'paragraph', content: 'Hey guys!!!' },
        { type: 'paragraph', content: "I'm looking for developer who can develop nice websites with unique desings" },
        { type: 'paragraph', content: "Anyone interested? Follow the link bellow" },
        { type: 'link', content: ' 👉 linkedin.com', src: '#'} as LinkContentInterface,
        { type: 'markdown', content: '#newProject' },
        { type: 'markdown', content: '#newRoles' },
        { type: 'markdown', content: '#nextLevel' },
      ],
      publishedAt: new Date('2022-08-19 20:00:00'),
      comments: [
        {
          id:1,
          publishedAt: new Date('2022-08-17 20:00:00'),
          author: {
            avatarUrl: 'https://github.com/viniokamoto.png',
            name: 'Vinicius Okamoto',
            role: 'Software Engineer',
          },
          comment: "I think I can do it!!!",
          likes: 15,
          hasUserLike: true,
        },
      ],
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/viniokamoto.png',
        name: 'Vinicius Okamoto',
        role: 'Software Engineer',
      },
      content: [
        { type: 'paragraph', content: 'Yup Guys 👋' },
        { type: 'paragraph', content: "I just finished my first project in React. I'm wondering if it's a good idea keep studying React for web development 🚀"},
        { type: 'markdown', content: '#keepGriding' },
        { type: 'markdown', content: '#react' },
        { type: 'markdown', content: '#rocketseat' },
      ],
      publishedAt: new Date('2022-08-17 20:00:00'),
      comments: [
        {
          id:1,
          publishedAt: new Date('2022-08-17 20:00:00'),
          author: {
            avatarUrl: 'https://github.com/Beteenn.png',
            name: 'Gilberto Barbosa',
            role: 'Software Engineer',
          },
          comment: "I think it's a good idea bro!!",
          likes: 5,
          hasUserLike: true,
        },
        {
          id: 2,
          publishedAt: new Date('2022-08-17 19:00:00'),
          author: {
            avatarUrl: 'https://github.com/Lideme.png',
            name: 'Matheus Lideme',
            role: 'UI/UX Designer',
          },
          comment: "Yeah, keep studying!",
          likes: 3,
          hasUserLike: true,
        },
        {
          id: 3,
          publishedAt: new Date('2022-08-17 19:00:00'),
          author: {
            avatarUrl: 'https://github.com/fabio2804.png',
            name: 'Fabio Vilela',
            role: 'Software Engineer',
          },
          comment: "Yeah, keep studying!",
          likes: 2,
          hasUserLike: false,
        },
      ],
    },
  ]
  