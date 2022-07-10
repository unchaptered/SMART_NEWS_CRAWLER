export interface IForm {

    isSuccess: boolean,
    message: string,
    result: Object,

}

export class Form implements IForm {

    isSuccess: boolean;
    message: string;
    result: Object;

    constructor(isSuccess: boolean, message: string, result: Object) {

        this.isSuccess = isSuccess;
        this.message = message;
        this.result = result;

    }    

}
export class SuccessForm extends Form {

    constructor(message: string, result: Object) {
        super(true, message, result);
    }

}
export class FailForm extends Form {

    constructor(message: string) {
        super(false, message, {});
    }

}