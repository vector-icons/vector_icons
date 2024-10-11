import { QuarkIconBinding } from "./icon_binding";

export class QuarkIconElement extends HTMLElement {
    connectedCallback() {
        const name = this.getAttribute("name");
        if (name == "") {
            throw new Error("Required attribute `name` is not defined.");
        }

        const innerHTML = QuarkIconBinding.instance.svgOf(name);

        this.innerHTML = innerHTML;
        this.style.width = "32px";
        this.style.height = "32px";
    }
}

customElements.define("q-icon", QuarkIconElement);