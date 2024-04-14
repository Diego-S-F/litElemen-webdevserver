import { LitElement, html, css } from "lit";

class DwMessage extends LitElement {
    static styles = css`
    :host {
        display:  block;
        border: 1px solid #334eff;
        padding: 10px; 
    }
    div {
        width: 100%;
        text-align: center;
    }
    `
    render(){
        return  html `
            <div>
                Hello from Lit
            </div>
            <div>
                Second tag
            </div>
        `
    }
}

customElements.define('dw-message', DwMessage)