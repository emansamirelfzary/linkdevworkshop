import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { News } from '../../interfaces/news';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss'
})
export class NewsDetailsComponent implements OnInit{
    newsIndex: number = 0;
    newsItem: News = {} as News;
    categoryName: string = '';
    relatedNews: News[] = [];
    allNews: News[] = [];

    constructor(private _activatedRoute: ActivatedRoute, private _newsService: NewsService) {}

    ngOnInit(): void {
      this._activatedRoute.paramMap.subscribe({
        next:(res:any)=>{
          this.newsIndex=res.params.index
          this.categoryName=res.params.categoryName
          this.getNewsItem();
        }
      });
    }

    getNewsItem(){
      this._newsService.getNewsDetails(this.newsIndex).subscribe({
        next: (response) => {
          this.newsItem = response;
          this.getRelatedNews(response.categoryID,response.id);
        },
      });
    }

    getRelatedNews(categoryID:string,id: string){
      this._newsService.getNews().subscribe({
        next: (response) => {
          this.allNews = response.News;
          this.relatedNews = this.allNews.filter(news => news.categoryID === categoryID && news.id!==id);
        },
      });
    }
  }


