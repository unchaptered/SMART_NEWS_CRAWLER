import * as Realm from 'realm-web';


import { Bindings } from '../..';
import { Comments, Exception, IntervalServerError, UnkownServerError } from '../../models/models.loader';

export class RealmFactory {

    static App: Realm.App;
    static env: {
        SERVICE: string;
        APP_ID: string;
        DB_NAME: string;
        CL_COMMENTS: string;
    };

    static initialize(env: Bindings) {

        this.env = env;
        this.App = new Realm.App(RealmFactory.env.APP_ID);

    }

    constructor() {}

    private getMongoClient(user: Realm.User): globalThis.Realm.Services.MongoDB {
        return user.mongoClient(RealmFactory.env.SERVICE);
    }

    private getCommentsCollection(client: globalThis.Realm.Services.MongoDB) {
        return client.db(RealmFactory.env.DB_NAME).collection<Comments>(RealmFactory.env.CL_COMMENTS);
    }

    /**
     * @depreacted
     */
    async insertOne(user: Realm.User) {

        const client = this.getMongoClient(user);
        const collection = this.getCommentsCollection(client);

        const result = await collection.insertOne({
            accessToken: 'OIOI' ?? 'user.accessToken',
            refreshToken: 'OIOI' ?? 'user.refreshAccessToken',
            commnet: user.id
        });

        console.log('INSERT');
        console.log(result);

    }

    async getUserInstanceByCredit(Credit: Realm.Credentials): Promise<Realm.User | Exception> {

        try {

            return await RealmFactory.App.logIn(Credit);

        } catch(err) {

            if (err instanceof Error) return new IntervalServerError(err.message);
            else return new UnkownServerError(JSON.stringify(err));

        }

    }
    
}