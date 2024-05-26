class CoverJS extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
      :host {
        --width: var(--cover-size);
        --height: var(--cover-size);
        --shadow-gradient: linear-gradient(to left, #0006 -3%, transparent 2% 98%, #0009 104%);
        --cover-vinyl:
            linear-gradient(150deg, 
              #403838 20%, #FFC843 20.25% 21%,
              #403838 21.25% 22.75%, #FFC843 23% 24%,
              #403838 24% 25%, #FFC843 25.25% 27%,
              #403838 27% 27.75%, #FFC843 28% 30%,
              #403838 30.25% 31%, #FFC843 31.25% 35%,
              #403838 35% 35.5%, #FFC843 35.75% 40%,
              #403838 40.25% 40.25%, #FFC843 40.75% 41%,
              transparent 41%
            );
            
          );
        --cover-padding: 10px 25px;
      }

      .container {
        width: var(--width);
        height: var(--height);
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        box-shadow:
          0 0 80px #000c inset,
          0 0 10px #0007;

        background:
          url(/asfalt-dark.png),
          var(--shadow-gradient),
          var(--cover-vinyl);
          background-color: #EAAD3A;

        overflow: hidden;
      }

      h1{
        font-family: "Roboto";
        font-weight: 900;
        font-size: 4.5rem;
        color: #332F2C;
        margin: 0;
      }

      h3{
        font-family: "Roboto";
        font-weight: 900;
        color: #AE3514;
        letter-spacing: -2px;        
        font-size: 2.25rem;
        margin: 0;
        text-align: left;
        line-height: 60%;
        padding-right: 0.5rem;
      }

      .brand {
        font-family: "Lester Bold";
        font-size: 2rem;
        border: 1px solid #222;
        border-radius: 2px;
        padding: 0 2px;
        margin: 0.5rem;
        color: #222;
        text-shadow: 0 0 1px #222;
        display: inline-block;
        float: right;
      }

      .rect{
        background: #262321;
        width: 80px;
        height: 120px;
        border-radius: 4px;
        position: absolute;
        right: 0;
        top: 175px;
        transform: translate(58px, 0) rotate(-30deg);
        color: #EAAD3A;
        font-family: "Roboto";
        font-size: 1.25rem;
        padding: 8px;

      }

      .text {
        font-family: "Roboto";
        font-weight: 800;
        font-size: 1.2rem;
        float: right;
        letter-spacing: -1px;
        color: #333;
        padding: 10px 15px;
      }

      .group{
        transform: rotate(-30deg) translate(-50px, 130px);
        padding: var(--cover-padding);
      }

    `;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>${CoverJS.styles}</style>
      <div class="container">
        <div class="group">
          <h1>Javascript</h1>
          <h3>ECMAScript</h3>
        </div>
        <div class="rect">TC39</div>
        <footer>
        <div class="text" ;">Untyped languaje</div>
        </footer>
      </div>
    `;
  }
}

customElements.define("cover-js", CoverJS);
