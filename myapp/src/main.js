import './app.css'
import App from './App.svelte'


  class SomeCustomEl extends HTMLElement {
    constructor() {
        super();
    }
  }

customElements.define("some-custom-el", SomeCustomEl);

const targetEl = document.getElementsByTagName(
  "some-custom-el",
)?.[0]
targetEl.attachShadow({ mode: "open" })
const app = new App({
  target: targetEl.shadowRoot
})

const scriptEl = document.createElement('script')
scriptEl.src = "/script.js";
document.body.appendChild(scriptEl);
scriptEl.addEventListener('load', () => {
	if (window.someInitScript) {
		window.someInitScript('awesome-header')
	}
})

export default app
