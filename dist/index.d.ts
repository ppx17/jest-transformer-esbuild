import { TransformOptions, Transformer, TransformerCreator } from "@jest/transform";
export interface TransformerConfig {
    format?: "esm" | "cjs";
    hoistMatch?: Array<string>;
}
export declare type EsbuildTransformOptions = TransformOptions<TransformerConfig>;
declare const _default: {
    createTransformer: TransformerCreator<Transformer<TransformerConfig>, TransformerConfig>;
};
export default _default;
