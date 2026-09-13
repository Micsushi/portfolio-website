# Portfolio website

React and TypeScript source for the personal portfolio and contact form.

## Run locally

```sh
npm ci
npm start
```

The development server uses port 3000 by default. Use an unused port if another
checkout is running. The contact form sends through EmailJS; use the mocked
tests below for validation without sending a message.

## Verify a change

```sh
npm test -- --watchAll=false --runInBand
npx tsc --noEmit
npm run build
```

The tests exercise contact validation and successful submission with a mocked
EmailJS client. The production bundle is written to `build/`. For UI changes,
also check narrow and wide layouts, navigation, keyboard focus, and form error
messages in a dedicated local browser profile. A local build does not establish
email delivery or a deployed preview's source identity.
