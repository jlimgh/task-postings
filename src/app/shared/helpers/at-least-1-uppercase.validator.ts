import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function AtLeast1UpperCase(): ValidatorFn {  
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.value) {
            const stringToArray = control.value.split('');
            const hasLowerCase = stringToArray.some((el: string) => {
                return el.toLowerCase() !== el;
            });
            return hasLowerCase ? null : { atLeast1UpperCase: true };
        } else {
            return null;
        }
    }
}