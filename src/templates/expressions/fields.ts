import {
    TsExpression,
    toTsExpressions,
} from "./expression";
import { KintoneFieldTypeToTypeScriptFieldTypeNameConverter as FieldTypeConverter } from "./typescriptfieldtypeconverter";

export class FieldGroup implements TsExpression {
    constructor(
        private stringFields: StringField[],
        private calculatedFields: CalculatedField[],
        private stringListFields: StringListField[],
        private entityListFields: EntityListField[],
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

export class StringField implements TsExpression {
    constructor(
        private fieldName: string,
        private fieldType: string
    ) {}

    tsExpression(): string {
        return `"${
            this.fieldName
        }" : ${FieldTypeConverter.convertStringField(
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

export class StringListField implements TsExpression {
    constructor(
        private fieldName: string,
        private fieldType: string
    ) {}
    tsExpression(): string {
        return `"${
            this.fieldName
        }" : ${FieldTypeConverter.convertStringListField(
            this.fieldType
        )};`.trim();
    }
}

export class StringFieldInSavedRecord
    implements TsExpression {
    constructor(
        private fieldName: string,
        private fieldType: string
    ) {}

    tsExpression(): string {
        return `"${
            this.fieldName
        }" : ${FieldTypeConverter.convertFieldsInSavedRecord(
            this.fieldType
        )};`;
    }
}

export class UserField implements TsExpression {
    constructor(
        private fieldName: string,
        private fieldType: string
    ) {}
    tsExpression(): string {
        return `"${
            this.fieldName
        }" : ${FieldTypeConverter.convertUserField(
            this.fieldType
        )};`.trim();
    }
}

export class EntityListField implements TsExpression {
    constructor(
        private fieldName: string,
        private fieldType: string
    ) {}
    tsExpression(): string {
        return `"${
            this.fieldName
        }" : ${FieldTypeConverter.convertEntityListField(
            this.fieldType
        )};`.trim();
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
