import { QUARK_ICONS } from "./icons";

export class QuarkIconBinding {
    private static _instance: QuarkIconBinding;
    private constructor() {}

    static get instance() {
        return this._instance ?? (this._instance = new QuarkIconBinding());
    }

    svgOf(name: string) {
        return QUARK_ICONS[name];
    }

    /** Initializes a required style sheet on the document. */
    initialize() {
        const sheet = new CSSStyleSheet();

        sheet.insertRule(`
            q-icon { display: flex; }
        `);

        // Defines the style rules that apply to the children of this element.
        document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
    }
}