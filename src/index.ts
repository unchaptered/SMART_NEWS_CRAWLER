import { GlobalController } from './layers/global.controller';

export interface Bindings {
    SERVICE: string;

    APP_ID: string;
    DB_NAME: string;
    CL_COMMENTS: string;
    
    ADMIN_TOKEN: string;
}

const worker: ExportedHandler<Bindings> = {

    async fetch(req: Request, env: Bindings) {

      return await new GlobalController(req, env).route();

    }

}

export default worker;