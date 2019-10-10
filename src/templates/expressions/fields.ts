import {
    TsExpression,
    toTsExpressions,
} from "./expression";
import { KintoneFieldTypeToTypeScriptFieldTypeNameConverter as FieldTypeConverter } from "./typescriptfieldtypeconverter";

export class FieldGroup implements TsExpression {
    constructor(
        private stringFields: ConvertibleByKintoneTypeField[],
        private calculatedFields: CalculatedField[],
        private stringListFields: ConvertibleByKintoneTypeField[],
        private entityListFields: ConvertibleByKintoneTypeField[],
        private fileFields: FileField[]
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

export class ConvertibleByKintoneTypeField
    implements TsExpression {
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

export class CalculatedField implements TsExpression {
    constructor(private fieldName: string) {}

    tsExpression(): string {
        return `"${this.fieldName}" : kintone.types.fields.Calc;`.trim();
    }
}

export class FileField implements TsExpression {
    constructor(private fieldName: string) {}
    tsExpression(): string {
        return `"${this.fieldName}" : kintone.types.fields.File;`.trim();
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
