// src/posthog.ts
import posthog from 'posthog-js'

export function initPosthog() {
  if (typeof window !== 'undefined') {
    posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
      person_profiles: 'identified_only',
    })
  }
}

export default posthog
