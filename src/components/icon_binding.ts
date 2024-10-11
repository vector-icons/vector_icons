
export class QuarkIconBinding {
    private static _instance: QuarkIconBinding;
    private constructor() {}

    static get instance() {
        return this._instance ?? (this._instance = new QuarkIconBinding());
    }

    svgOf(name: string) {

    }
}