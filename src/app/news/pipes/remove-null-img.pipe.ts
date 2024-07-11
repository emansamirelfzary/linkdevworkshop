import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../interfaces/news';

@Pipe({
  name: 'removeNullImg'
})
export class RemoveNullImgPipe implements PipeTransform {

     transform(value: string): string {
     
          const imageExists = this.loadImage(value);
          if (!imageExists) {
           return "assets/images/relative.jpg";
          }
          return value;
       
    }
  
    private loadImage(src: string): Promise<boolean> {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
      
      })}
    }
      /*
  transform(value: News[]): Promise<News[]> {
    return Promise.all(
      value.map(async (news) => {
        const imageExists = await this.loadImage(news.urlToImage);
        if (!imageExists) {
          news.urlToImage = "assets/images/relative.jpg";
        }
        return news;
      })
    );
  }
  
  private loadImage(src: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = src;
    });
  }
  
}
*/