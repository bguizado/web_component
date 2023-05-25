class myHeader extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode:'open'});

        this.enlaces = [
            { id: 'back', label: '< Back' },
            { id: 'logo', label: 'LittleLemon' },
            { id: 'user', label: 'User' },
            { id: 'cart', label: '' }
          ];
    }

    connectedCallback(){
        this._render();
    }

    _render() {
        this._shadowRoot.innerHTML = `
        <style>

            #navegador {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 8vh;
                padding: 1rem;

            }

            div {
                display: flex;
            }

            .enlace {
                text-decoration: none;
                color: #027000;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 300;
                font-size: 16px;
                line-height: 19px;
            }

            #logo {
                font-weight: 700;
                font-size: 20px;
                line-height: 24px;
            }

            #cart {
                background-image: url(./img/cart-icon.png);
                background-repeat: no-repeat;
                background-position: center;
                height: 20px;
                width: 20px;
                background-size: 20px 20px;
                margin-left: 10px;
            }
        </style>

        <nav id="navegador">
        ${this.enlaces.filter(({ id }) => id !== "user" && id !== "cart").map(({ id, label }) => `<a href="#" id="${id}" class="enlace"> ${label} </a>`).join('')}
            <div>
            ${this.enlaces.filter(({ id }) => id === "user" || id === "cart").map(({ id, label }) => `<a href="#" id="${id}" class="enlace"> ${label} </a>`).join('')}
            </div>
        </nav>

        `;
    }
}

window.customElements.define('my-header', myHeader)


class myH1 extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this._render();
        const textoEncabezado = this.textContent;
        const encabezado = document.createElement('h1');
        encabezado.textContent = textoEncabezado;
        this.shadowRoot.appendChild(encabezado);
    }

    _render() {
        this._shadowRoot.innerHTML = `
        <style>
            h1 {
                font-style: italic;
                margin-bottom: 75px;
                font-weight: 700;
                font-size: 40px;
                line-height: 48px;
                color: #027000;
                height: 12vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        </style>
        `;
    }
}

window.customElements.define('my-h1', myH1)


class myLink extends HTMLElement{
    constructor(){
        super();
        this._shadowRoot = this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this._render();
     }

    _render() {
        this._shadowRoot.innerHTML = `
        <style>
            #link_go_back {
                border: 1px solid #FAF014;
                font-size: 35px;
                margin:  auto auto 40px;
                padding:  7px 0px;
                font-style: italic;
            }

            #go_back{
                text-decoration: none;
                color: #027000;
                padding: 1rem;
            }
        </style>

        <div id="link_go_back">
            <a id="go_back" href="">${this.textContent}</a>
        </div>
        `;
    }
}

window.customElements.define('my-link', myLink)