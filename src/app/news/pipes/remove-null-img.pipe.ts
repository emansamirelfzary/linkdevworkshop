import { Pipe, PipeTransform } from '@angular/core';
import { News } from '../interfaces/news';

@Pipe({
  name: 'removeNullImg'
})
export class RemoveNullImgPipe implements PipeTransform {

  transform(value: News[]): News [] {

    return value.map(news => {
      let img = new Image();
      
      return news
    });
  }

}
