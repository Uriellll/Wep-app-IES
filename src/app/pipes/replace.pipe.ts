import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: string): string {
    value = value.replace(/a/g, "4");
    value = value.replace(/e/g, "3");
    value = value.replace(/i/g, "1");
    value = value.replace(/o/g, "0");
    value = value.replace(/u/g, "9");
    return value;
    
  }

}
