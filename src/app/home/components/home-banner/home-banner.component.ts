import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Slide } from '../../interfaces/slide';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.scss'
})
export class HomeBannerComponent implements OnInit{

  unOrderedSlides:Slide[]=[]
  slides:Slide[]=[];
  slidesImages=["assets/images/slide1.png","assets/images/slid2.png","assets/images/slide3.png"]
  activeSlideIndex = 0;

  constructor(private _homeService:HomeService) {

}

ngOnInit(): void {
    this._homeService.getBanner().subscribe({
      next:(response)=>{
       this.unOrderedSlides=response.slides
        this.slides=this.unOrderedSlides.sort((a, b) => b.order - a.order);
        this.slides.map((slide,index)=>{
          slide.imgUrl=this.slidesImages[index]
        })
        console.log(this.slides)
      }
    })
}
}
