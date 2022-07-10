import { Router } from 'itty-router';

export interface Bindings {
    SERVICE: string;

    APP_ID: string;
    DB_NAME: string;
    CL_COMMENTS: string;
    
    ADMIN_TOKEN: string;
}

const worker: ExportedHandler<Bindings> = {

    async fetch(req: Request, env: Bindings) {

      const router = Router();

      router.all('*', (req: Request) => {

        const url = new URL(req.url);

        return new Response(`${req.method} ${url.pathname} is not supported!`, {
          status: 404
        });

      });

      return router.handle(req);

    }

}

export default worker;