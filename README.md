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

After a change, compare the running instance's served assets with the intended
build or deployment revision. Report the source and running revision separately;
if they differ, state whether a rebuild, restart, or reload is still needed.

After building and starting the intended static server, compare every manifest
asset and the page with the local build:

```sh
node scripts/verify-served-build.cjs http://localhost:3000/
node --test scripts/test-served-build.cjs
```

The verifier exits unsuccessfully on a missing or different asset. It performs
read-only HTTP requests and does not start, restart, or publish a server. Supply
a different URL or a second argument for a different build directory as needed.
