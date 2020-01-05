import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 1) { return value; }
    const resultadoFilter = [];
    for (const product of value) {
      if (product.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultadoFilter.push(product);
        }
    }
    return resultadoFilter;
  }

}
