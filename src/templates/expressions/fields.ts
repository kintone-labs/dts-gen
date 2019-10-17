import {
    TsExpression,
    toTsExpressions,
} from "./expression";
import { KintoneFieldTypeToTypeScriptFieldTypeNameConverter as FieldTypeConverter } from "./typescriptfieldtypeconverter";

export class FieldGroup implements TsExpression {
    constructor(
        private stringFields: TSDefinedField[],
        private calculatedFields: TSDefinedField[],
        private stringListFields: TSDefinedField[],
        private entityListFields: TSDefinedField[],
        private fileFields: TSDefinedField[]
    ) {}

    tsExpression(): string {
        return `
${toTsExpressions(this.stringFields)}
${toTsExpressions(this.calculatedFields)}
${toTsExpressions(this.stringListFields)}
${toTsExpressions(this.entityListFields)}
${toTsExpressions(this.fileFields)}
`.trim();
    }
}

export class TSDefinedField implements TsExpression {
    constructor(
        private fieldName: string,
        private fieldType: string
    ) {}

    tsExpression(): string {
        return `"${
            this.fieldName
        }" : ${FieldTypeConverter.convert(
            this.fieldType
        )};`.trim();
    }
}

export class SubTableField implements TsExpression {
    constructor(
        private fieldName: string,
        private fieldType: string,
        private fieldGroup: FieldGroup
    ) {}
    tsExpression(): string {
        return `
"${this.fieldName}" : {
    type: "${this.fieldType}";
    value: {
        id: string;
        value: {
            ${this.fieldGroup.tsExpression()}
        }
    }[];
};`.trim();
    }
}
