import { AuthorInterface } from "./AuthorInterface";
import { CommentInterface } from "./CommentInterface";
import { ContentInterface } from "./ContentInterface";

export interface PostInterface {
    id?: number,
    publishedAt: Date,
    author: AuthorInterface,
    content: ContentInterface[],
    comments: CommentInterface[],
}