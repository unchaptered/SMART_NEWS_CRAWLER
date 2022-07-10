import { Router } from 'itty-router';
import { Bindings } from '..';

export class GlobalController {

    private req: Request;
    private env: Bindings;
    private router: Router;

    constructor(req: Request, env: Bindings) {

        this.req = req;
        this.env = env;
        this.router = Router();

        this.router.all('*', (req: Request) => {

            const url = new URL(req.url);

            return new Response(`${req.method} ${url.pathname} is not supported!`, {
            status: 404
            });

        });

    }

    async route() {

      return this.router.handle(this.req);

    }

}