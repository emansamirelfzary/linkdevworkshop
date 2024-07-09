import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceTitle'
})
export class SliceTitlePipe implements PipeTransform {

  transform(value:string): string {

    let title=value.split(" ")
    if(title.length<8) return value
    return title.slice(0,8).join(" ")+"..."

  }

}
