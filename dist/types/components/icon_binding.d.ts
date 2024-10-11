export declare class QuarkIconBinding {
    private static _instance;
    private constructor();
    static get instance(): QuarkIconBinding;
    svgOf(name: string): any;
    /** Initializes a required style sheet on the document. */
    initialize(): void;
}
