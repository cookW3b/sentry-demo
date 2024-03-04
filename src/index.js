import * as Sentry from "@sentry/browser";
import { rewriteFramesIntegration } from "@sentry/integrations";

Sentry.init({
  dsn: "https://3c9d1b339d05c5bc7650bfeefe203fee@o4506851290972160.ingest.sentry.io/4506851292610560",

  // Alternatively, use `process.env.npm_package_version` for a dynamic release version
  // if your build tool supports it.
  release: "my-project-name@2.3.13",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
    rewriteFramesIntegration({ prefix: 'foo/' })
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0
});

function component() {
  const element = document.createElement('button');

  element.innerText = "Throw exception";

  return element;
}

document.body.appendChild(component());

document.querySelector("button").addEventListener("click", () => {
  try {
    test1();
  } catch(e) {
    Sentry.captureException(e);
  }
})

function test1() {
  test2()
}

function test2() {
  test3()
}

function test3() {
  console.log(abcdf)
}
