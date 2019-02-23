import {
    TypeDefenition,
    SavedTypeDefenition,
} from "./typedefenitions";
import { TsExpression } from "./expression";

export class Namespace implements TsExpression {
    constructor(
        private namespace: string,
        private typeDefenition: TypeDefenition,
        private savedTypeDefenition: SavedTypeDefenition
    ) {}
    tsExpression(): string {
        return `
        declare namespace ${this.namespace} {
            ${this.typeDefenition.tsExpression()};
            ${this.savedTypeDefenition.tsExpression()};
        }`;
    }
}
