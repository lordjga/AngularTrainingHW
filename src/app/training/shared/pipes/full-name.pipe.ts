import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
  pure: true
})
export class FullNamePipe implements PipeTransform {
  transform(firstName: string, lastName: string): string | null {
    return firstName + ', ' + lastName;
}
}
