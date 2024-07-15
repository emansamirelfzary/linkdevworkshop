import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceTitle'
})
export class SliceTitlePipe implements PipeTransform {

  transform(value:string): string {

    let title=value.split(" ")
    if(title.length<10) return value
    return title.slice(0,10).join(" ")+"..."

  }

}
