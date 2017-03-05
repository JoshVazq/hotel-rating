import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidatorFn, FormControl } from '@angular/forms';

// validation function
function validatePasswordFactory(): ValidatorFn {
    var regExp = RegExp(/\d/i);
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
    selector: '[password][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true }
    ]
})
export class PasswordValidatorDirective implements Validator {
    validator: ValidatorFn;

    constructor() {
        this.validator = validatePasswordFactory();
    }

    validate(c: FormControl) {
        return this.validator(c);
    }

}
