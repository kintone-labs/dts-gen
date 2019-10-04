import {
    FieldGroup,
    SubTableField,
    UserField,
    StringFieldInSavedRecord,
} from "./fields";
import {
    TsExpression,
    toTsExpressions,
} from "./expression";

export class TypeDefinition implements TsExpression {
    constructor(
        private typeName: string,
        private fieldGroup: FieldGroup,
        private subtableFields: SubTableField[]
    ) {}
    tsExpression(): string {
        return `
interface ${this.typeName} {
    ${this.fieldGroup.tsExpression()}
    ${toTsExpressions(this.subtableFields)}
}`.trim();
    }
}

export class SavedTypeDefinition implements TsExpression {
    constructor(
        private typeName: string,
        private userFields: UserField[],
        private stringFieldsInSavedRecord: StringFieldInSavedRecord[]
    ) {}

    tsExpression(): string {
        return `
interface Saved${this.typeName} extends ${this.typeName} {
    $id : kintone.types.fields.Id;
    $revision: kintone.types.fields.Revision;
    ${toTsExpressions(this.userFields)}
    ${toTsExpressions(this.stringFieldsInSavedRecord)}
}`.trim();
    }
}
