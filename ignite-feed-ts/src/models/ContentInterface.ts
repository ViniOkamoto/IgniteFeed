export interface ContentInterface{
    type: string,
    content: string,
}

export interface LinkContentInterface extends ContentInterface {
    src: string,
}