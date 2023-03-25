import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkUserStatusColor'
})
export class CheckUserStatusColorPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case "actif":
        return "stroke-primary-500";
      case "inactif":
        return "stroke-red-600";
      default:
        return "stroke-secondary";
    }
  }

}
