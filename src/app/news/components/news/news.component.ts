import { Category } from './../../interfaces/category';
import { forkJoin } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { News } from '../../interfaces/news';
import { NewsService } from '../../services/news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit{
  allNews:News[]=[]
  categories:Category[]=[]
  selectedCategory:string="all"
  filteredNews:News[]=[]

  constructor(private _newsService:NewsService){}

  ngOnInit(): void {
if(this.selectedCategory="all"){
  this.filteredNews=this.allNews
}


    this._newsService.getCategory().subscribe({
    next: (response) => {
      this.categories = response.newsCategory.splice(0,4);

      this.getAllnews()
      console.log(this.allNews);
    },

})

}

/*    forkJoin({
      news: this._newsService.getNews(),
      categories: this._newsService.getCategory()
    }).subscribe({
      next: ({ news, categories }) => {
        this.allNews = news.News;
        this.filteredNews=this.allNews
        this.categories = categories.newsCategory.splice(0,4);

        this.allNews.map(news=>{
          this.categories.map(cat=>{
            if(news.categoryID==cat.id){
              news.categoryName=cat.name
            }})})


        console.log(this.allNews);
      },

  })

}*/
getAllnews(){
  this._newsService.getNews().subscribe({
    next:(response)=>{
      this.allNews = response.News;
      this.filteredNews=this.allNews
      this.allNews.map((news,i)=>{
        news.index=i
        console.log(i)
        this.categories.map(cat=>{
          if(news.categoryID==cat.id){
            news.categoryName=cat.name
          }})})
          console.log()

    }
  })
}

filterNews(CatId:string){
  this.selectedCategory=CatId

  if(this.selectedCategory=="all"){
    this.filteredNews=this.allNews
  }else{

 this.filteredNews= this.allNews.filter(news=>news.categoryID==this.selectedCategory)
  console.log(this.allNews)}

}

}
