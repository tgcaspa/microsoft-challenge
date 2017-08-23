import { Pipe, PipeTransform } from '@angular/core';

declare let _: any;

@Pipe({
    name: 'firstLetter'
})
export class FirstLetterPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        return _.lowerCase(value.charAt(0)) || "";
    }

}
