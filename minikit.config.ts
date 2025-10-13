const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
  accountAssociation: {
    header: "",
    payload: "",
    signature: ""
  },
  miniapp: {
    version: "1",
    name: "Farcaster Fortune Cookie",
    subtitle: "Your crypto prophecy in one click",
    description: "Crack a cookie and reveal your Web3 destiny 🍪",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/icon.png`,
    splashImageUrl: `${ROOT_URL}/splash.png`,
    splashBackgroundColor: "#6B21A8", // purple
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "fun",
    tags: ["fortune", "farcaster", "fun"],
    heroImageUrl: `${ROOT_URL}/hero.png`,
    tagline: "Crack a cookie, cast your fate!",
    ogTitle: "Farcaster Fortune Cookie",
    ogDescription: "Your Web3 fortune awaits 🍀",
    ogImageUrl: `${ROOT_URL}/hero.png`,
  },
} as const;
