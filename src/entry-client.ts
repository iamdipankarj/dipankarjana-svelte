import './app.css'
import App from './App.svelte'
import { initPosthog } from './posthog'

initPosthog()

new App({
  target: document.getElementById('app') as any,
  hydrate: true
})
