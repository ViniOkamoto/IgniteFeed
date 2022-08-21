export interface Content{
    type: string,
    content: string,
}

export interface LinkContent extends Content {
    src: string,
}