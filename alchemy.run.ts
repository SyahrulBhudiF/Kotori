import * as Cloudflare from "@alchemy.run/cloudflare"
import * as Alchemy from "alchemy"
import * as Effect from "effect/Effect"

/**
 * The N5 study site on Cloudflare Workers. `Cloudflare.Website.Vite` runs
 * `vite build` with the Cloudflare Vite plugin and uploads the client assets
 * plus the SSR server bundle, so there is no Wrangler config.
 */
export class Website extends Cloudflare.Website.Vite<Website>()("Website", {
  domain: "kotori.ryuko.my.id",
}) {}

export type WebsiteEnv = Cloudflare.InferEnv<typeof Website>

export default Alchemy.Stack(
  "Kotori",
  {
    providers: Cloudflare.providers(),
    state: Cloudflare.state(),
  },
  Effect.gen(function* () {
    const website = yield* Website

    return { websiteUrl: website.url.as<string>() }
  }),
)
