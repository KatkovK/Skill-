import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article, ArticleCreate } from '../models/articles';




@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles: Article[] = [
    {
      "imag": "/assets/img/photo/Image 6.jpg",
      "tags1": "Data Sciense",
      "tags2": "Africal Inteligence",
      "title": "How To Add Confidence Intervals to Any Model",
      "annotation": "I would like to add another technique to your toolkit — confidence intervals.",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo corrupti quia repellendus! Tenetur vero recusandae dolorum, quibusdam minima eius illo vitae, inventore corporis similique veritatis voluptates maxime? Voluptatum fugiat doloremque ut necessitatibus, eligendi voluptate voluptatem assumenda, iste magnam similique impedit nam! Obcaecati voluptatem odio earum aliquid nisi eveniet perspiciatis tempora minus. Vitae nemo molestias sapiente iure sunt excepturi atque",
      "id": "33"
    },
    {
      "imag": "/assets/img/photo/Image2.jpg",
      "tags1": "JavaScript",
      "tags2": "Front End",
      "title": "What’s New in JavaScript — ES2019",
      "annotation": "Every year there have been new features added to the JavaScript specification. Array.flatMap, try/catch improvements and more",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo corrupti quia repellendus! Tenetur vero recusandae dolorum, quibusdam minima eius illo vitae, inventore corporis similique veritatis voluptates maxime? Voluptatum fugiat doloremque ut necessitatibus, eligendi voluptate voluptatem assumenda, iste magnam similique impedit nam! Obcaecati voluptatem odio earum aliquid nisi eveniet perspiciatis tempora minus. Vitae nemo molestias sapiente iure sunt excepturi atque",
      "id": "23"
    },
    {
      "imag": "/assets/img/photo/Image3.jpg",
      "tags1": "Productivity",
      "tags2": "Humor",
      "title": "How To Fake Being a Good Programmer",
      "annotation": "Programmers are wizards— poor, ragged characters turning coffee into code. I don’t know magic, I‘m merely an illusionist.",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo corrupti quia repellendus! Tenetur vero recusandae dolorum, quibusdam minima eius illo vitae, inventore corporis similique veritatis voluptates maxime? Voluptatum fugiat doloremque ut necessitatibus, eligendi voluptate voluptatem assumenda, iste magnam similique impedit nam! Obcaecati voluptatem odio earum aliquid nisi eveniet perspiciatis tempora minus.",
      "id": "66",
    },
    {
      "imag": "/assets/img/Image.jpg",
      "tags1": "Coding",
      "tags2": "Programming",
      "title": "Stop Using i++ in Your Loops",
      "annotation": "Why ++i is often better than i++ (pre-increment vs. post-increment).",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo corrupti quia repellendus! Tenetur vero recusandae dolorum, quibusdam minima eius illo vitae, inventore corporis similique veritatis voluptates maxime? Voluptatum fugiat doloremque ut necessitatibus, eligendi voluptate voluptatem assumenda, iste magnam similique impedit nam! Obcaecati voluptatem odio earum aliquid nisi eveniet perspiciatis tempora minus. Vitae nemo molestias sapiente iure sunt excepturi atque",
      "id": "88",
    },
    {
      "imag": "/assets/img/photo/Image5.jpg",
      "tags1": "Programming",
      "tags2": "Terminal",
      "title": "Here Are 11 Console Commands Every Developer Should Know",
      "annotation": "Instead of clicking around in the Graphical User Interface (GUI), we can fire off a couple of.",
      "text": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quo corrupti quia repellendus! Tenetur vero recusandae dolorum, quibusdam minima eius illo vitae, inventore corporis similique veritatis voluptates maxime? Voluptatum fugiat doloremque ut necessitatibus, eligendi voluptate voluptatem assumenda, iste magnam similique impedit nam! Obcaecati voluptatem odio earum aliquid nisi eveniet perspiciatis tempora minus. Vitae nemo molestias sapiente iure sunt excepturi atque",
      "id": "55",
    }
  ];
           
  constructor( private http: HttpClient ) { }         

  getArticles(): Observable<any[]> {
    return of(this.articles);
  }

  getArticleById(id): Observable<Article> {
    console.log(this.articles);
    
    return of(this.articles.find((article) => article.id === id));
  }

  addArt(articles: ArticleCreate): Observable<ArticleCreate> {
       return this.http.post<ArticleCreate>('http://skillplus.germanywestcentral.cloudapp.azure.com:1337/articles', articles)
     };

  updateArticle(articles: ArticleCreate): Observable<ArticleCreate> {
      return this.http.put<ArticleCreate>(`http://skillplus.germanywestcentral.cloudapp.azure.com:1337/articles/{id}`, articles)
    };

}


