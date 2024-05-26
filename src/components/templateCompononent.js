class CoverDev extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return `
      :host{

      }
    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${CoverDev.styles}</style>
      <div>
 
      </div>
      `;
  }
}

customElements.define("cover-dev", CoverDev);
