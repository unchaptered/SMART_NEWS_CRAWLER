import { Router } from 'itty-router';
import { Bindings } from '..';

import { GlobalService } from './layer.loader';

export class GlobalController {

    private req: Request;
    private env: Bindings;
    private router: Router;

    private globalService: GlobalService;

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

        this.globalService = new GlobalService();

    }

    async route() {

      return this.router.handle(this.req);

    }

}