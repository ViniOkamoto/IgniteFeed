import { AuthorInterface } from "./AuthorInterface";
import { CommentInterface } from "./CommentInterface";
import { ContentInterface } from "./ContentInterface";

export interface PostModel {
    id: number,
    publishedAt: Date,
    author: AuthorInterface,
    content: ContentInterface[],
    comments: CommentInterface[],
}