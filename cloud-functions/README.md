# Permission Portal Cloud Functions

Cloud functions for the Covid Watch Permission Portal.
Firebase project can be found here:

- [prod](https://console.firebase.google.com/project/permission-portal/)
- [dev](https://console.firebase.google.com/project/permission-portal-dev/)
- [test](https://console.firebase.google.com/project/permission-portal-test/)

In depth discussion of app and data model can be found in [Notion](https://www.notion.so/covidwatch/Org-Admin-App-Technical-Details-f8a235f8cfb44e1d938c731ccfe621cb).

## Development

Unfortunately the Firebase emulators don't support many auth features, so because this is an auth heavy application we are running a live dev infrastructure (see link above). Deploy the latest cloud functions to the dev infrastructure by running:

```
firebase deploy --only functions --project=dev
firebase deploy --only firestore:rules --project=dev
```

Once functions are deployed, the dev infrastructure can loaded with some fake sample data by navigating to the `functions/` directory and running:

```
node reset-dev-infrastructure.js
```

This script can be run repeatedly to clear out the dev infrastructure and reset it with only the sample data. However try to be mindful of other developers working with the same infrastructure, and check with them before resetting.

## Testing

#### Automated Tests

Firebase doesn't support much in the way of testing for Firebase Auth, so because this is an auth-heavy application we are maintaining a parallel implementation of Firebase project for testing [here](https://console.firebase.google.com/project/permission-portal-test/).

This means that in order for tests to run properly, they must be deployed first to the cloud. To do so, run:

```
firebase deploy --only functions --project=test
firebase deploy --only firestore:rules --project=test
```

Once changes are deployed, tests can be run from the `functions/` directory. Tests require a firebase admin key to run properly, stored as `functions/permission-portal-test-firebase-admin-key.json` (ask maintainer). Because they are written in Typescript, they must be built first:

```
cd functions
npm run build
npm run test
```

#### Manual Testing

Firebase provides the `firebase functions:shell` and `firebase emulators:start` commands to help with testing locally. However its often more useful to use a repl for the purposes of inspecting objects and iterating on designs. To run a repl that's set up to talk to the [`permission-portal-testing`](https://console.firebase.google.com/project/permission-portal-test/) infrastructure, run `node firebase-repl.js` from the `functions/` directory.

## Deployment

TODO
