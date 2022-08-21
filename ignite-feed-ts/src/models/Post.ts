import { Author } from "./Author";
import { CommentInterface } from "./Comment";
import { Content } from "./content";

export interface PostModel {
    id: number,
    publishedAt: Date,
    author: Author,
    content: Content[],
    comments: CommentInterface[],
}