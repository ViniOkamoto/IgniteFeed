import { AuthorInterface } from "./AuthorInterface";

export interface CommentInterface {
    id: number,
    author: AuthorInterface,
    comment: string,
    likes: number,
    hasUserLike: boolean,
    publishedAt: Date,
}