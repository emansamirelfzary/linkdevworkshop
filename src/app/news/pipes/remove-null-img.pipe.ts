import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../interfaces/news';

@Pipe({
  name: 'removeNullImg'
})
export class RemoveNullImgPipe implements PipeTransform {

  transform(value: News[]): News [] {

    return value.map(news => {
      let img = new Image();
       img.src = news.urlToImage;
      if(img.complete && img.naturalHeight!==0){
        news.urlToImage=news.urlToImage
      }
      else {
        news.urlToImage="assets/images/relative.jpg"
      }
      return news
    });
  }

}
