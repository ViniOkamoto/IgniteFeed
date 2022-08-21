import { Author } from "./Author";

export interface CommentInterface {
    id: number,
    author: Author,
    comment: string,
    likes: number,
    hasUserLike: boolean,
    publishedAt: Date,
}