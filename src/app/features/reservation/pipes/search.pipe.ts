import { Pipe, PipeTransform } from '@angular/core';
import { Site } from '../../../model/site';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: Site[] | null, text: string): Site[] | null {
    if (!text || !items) {
      return items;
    }
    return items.filter(item => {
        const findIndex = item.name.toLowerCase().indexOf(text.toLowerCase());
        return findIndex >= 0;
      });
  }
}
