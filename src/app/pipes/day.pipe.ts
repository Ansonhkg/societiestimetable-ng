import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'day'})
export class DayPipe implements PipeTransform{
    
    transform(value: number, args: number[]): any{

        // if(!value) return value;

        if(value === 0) return "Sunday";
        if(value === 1) return "Monday";
        if(value === 2) return "Tuesday";
        if(value === 3) return "Wednesday";
        if(value === 4) return "Thursday";
        if(value === 5) return "Friday";
        if(value === 6) return "Saturday";

    }
}