import { Exception, FailForm, SuccessForm } from '../../models/models.loader';

export class FormProvider {

    getSuccessForm( message: string, result: Object): SuccessForm {
        return new SuccessForm(message, result);
    }

    getFailForm(message: string): FailForm {
        return new FailForm(message);
    }

    getExceptionForm(e: Exception): FailForm {
        return new FailForm(`${e.name} : ${e.message}`);
    }
    
}