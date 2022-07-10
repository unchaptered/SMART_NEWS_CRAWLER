import * as Realm from 'realm-web';

export class CredentialFactory {

    constructor() {}

    getAnonCredential(): globalThis.Realm.Credentials {
        return Realm.Credentials.anonymous();
    }

    getAccountCredential(eamil: string, password: string): globalThis.Realm.Credentials {
        return Realm.Credentials.emailPassword(eamil, password);
    }
    
    getAdminTokenCredential(adminToken: string): globalThis.Realm.Credentials {
        return Realm.Credentials.apiKey(adminToken);
    }
    
}