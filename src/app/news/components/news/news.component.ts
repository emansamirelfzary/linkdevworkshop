import { Category } from './../../interfaces/category';
import { Component, OnInit,Input } from '@angular/core';
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

  @Input() latestNews: boolean = false;  // New input property


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
    error:(error) => {
      console.log('categories error', error);
    }

})

}

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
          console.log(this.allNews)
          if (this.latestNews) {
            this.filteredNews = this.filteredNews.sort((a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()).slice(0, 6);  
          }
    },
    error:(error) => {
      console.log('news error', error);
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
