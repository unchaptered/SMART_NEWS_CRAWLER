import { Form } from '../../models/models.loader';

export class ResponseProvider {

    private getBody(data: Form) {
        return JSON.stringify(data, null, 2)
    }
    
    getResponse(form: Form): Response {
        return new Response(
            this.getBody(form)
        );
    }

}