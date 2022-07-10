# SMART_NEWS_CRAWLER

SMART NEW CRAWLER is `Serverless Application` with Cloudflare workers.

Our services are separated based on the security level.

- High Level : Join, Login, O-Auth.
- Low Level : Except High Level Works.

So, I want to seperate these work.

SMART NEW CRAWLER is charge of Low Level to using Token.

So, your connection must **not** be throw our Service `https://smart-news.pages.dev`.

<hr>

## Structure

- Layer : Seperate Logics
- Models : Provide Dtos into Layer and Modules
- Modules : Provide functions with stabitlity

### Layer

- GlobalController
- GloablService

### Modules

- UrlBuilder
- FormProvider
- ResponseProvider
- RealmFactory
- CredentialFactory