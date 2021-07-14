export class Article {
   constructor (
     public img: string,
     public tags1: string,
     public tags2: string,
     public title: string,
     public text: string,
     public text1: string,
     public id?: string,
     public annotation?: string,
   ) {}
  
}

export class ArticleCreate {
  constructor (
    public img?: string,
    public title?: string,
    public annotation?: string,
    public text?: string,
    public id?: string,
  ) {}
}