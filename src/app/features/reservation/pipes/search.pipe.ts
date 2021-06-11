import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], text = ''): any[] {
    text = text.toLowerCase();
    return items ?
      items.filter((item, index) => {
        const findIndex = item.name.toLowerCase().indexOf(text);
        return findIndex >= 0;
      }) : items;
  }
}
