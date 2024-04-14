import { LitElement, html } from "lit";

class DwMessage extends LitElement {
    render(){
        return  html `
            <div>
                Hello from Lit
            </div>
        `
    }
}

customElements.define('dw-message', DwMessage)