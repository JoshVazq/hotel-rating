import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn, FormControl } from '@angular/forms';

// validation function
function validateEmailFactory(): ValidatorFn {
    var regExp = RegExp(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i)
    return (c: AbstractControl) => {

        let isValid = regExp.test(c.value);
        if (isValid) {
            return null;
        } else {
            return {
                email: {
                    valid: false
                }
            };
        }
    }
}

@Directive({
    selector: '[email][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }
    ]
})
export class EmailValidatorDirective implements Validator {
    validator: ValidatorFn;

    constructor() {
        this.validator = validateEmailFactory();
    }

    validate(c: FormControl) {
        return this.validator(c);
    }

}
