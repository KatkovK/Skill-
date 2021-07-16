export class Article {
   constructor (
     public imag: string,
     public tags1: string,
     public tags2: string,
     public title: string,
     public text: string,
     public id?: string,
     public annotation?: string,
   ) {}
  
}

export class ArticleCreate {
  constructor (
    public imag?: string,
    public title?: string,
    public annotation?: string,
    public text?: string,
    public id?: string,
  ) {}
}