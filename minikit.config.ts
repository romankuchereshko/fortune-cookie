const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  "accountAssociation": {
    "header": "eyJmaWQiOjU1NTE5NSwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDc4NzgxNkMzZTcxNDZERDQ5N2E4ZUQ3NzA1NjljNjZlMGI5RWUyNTAifQ",
    "payload": "eyJkb21haW4iOiJmb3J0dW5lLWNvb2tpZS1mdW4udmVyY2VsLmFwcCJ9",
    "signature": "rEx5brsJBOYG3ev4KzH/PyuAQSIn5KeoBdE4oM9S/p8lKjvNL5Y21Ti1jGIeovHMfPKNYaiW9Gkj4gULdvGM6Bs="
  },
  "baseBuilder": {
    "ownerAddress": "0x39d89D346119f542056cdF6e8a261114875B6Ed2"
  },
  miniapp: {
    version: "1",
    name: "Farcaster Fortune Cookie",
    subtitle: "Crypto prophecy in one click",
    description: "Crack a cookie and reveal your crypto destiny",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#6B21A8",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "entertainment",
    tags: ["fortune", "farcaster", "entertainment"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "Crack a cookie, cast your fate",
    ogTitle: "Farcaster Fortune Cookie.",
    ogDescription: "Your fortune awaits",
    ogImageUrl: `${ROOT_URL}/hero.png`,
    "noindex": true
  }
} as const;
