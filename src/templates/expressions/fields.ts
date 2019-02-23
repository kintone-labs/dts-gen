import {
    TsExpression,
    toTsExpressions,
} from "./expression";

export class FieldGroup implements TsExpression {
    constructor(
        private stringFields: StringField[],
        private stringListFields: StringListField[],
        private entityListFields: EntityListField[],
        private fileFields: FileField[]
    ) {}

    tsExpression(): string {
        return `
            ${toTsExpressions(this.stringFields)}
            ${toTsExpressions(this.stringListFields)}
            ${toTsExpressions(this.entityListFields)}
            ${toTsExpressions(this.fileFields)}
        `;
    }
}

export class StringField implements TsExpression {
    constructor(
        private fieldName: string,
        private fieldType: string
    ) {}

    tsExpression(): string {
        return `
            ${this.fieldName} : {
                type: "${this.fieldType}";
                value: string;
                error?: string;
            };
        `;
    }
}

export class StringListField implements TsExpression {
    constructor(
        private fieldName: string,
        private fieldType: string
    ) {}
    tsExpression(): string {
        return `
            ${this.fieldName} : {
                type: "${this.fieldType}";
                value: string[];
                error?: string;
            };
        `;
    }
}

export class UserField implements TsExpression {
    constructor(
        private fieldName: string,
        private fieldType: string
    ) {}
    /**
     * field type of UserField is CREATOR,MODIFIER.
     * So error property not exists.
     */
    tsExpression(): string {
        return `
            ${this.fieldName} : {
                type: "${this.fieldType}";
                value: {code: string, name: string}; 
            };
        `;
    }
}

export class EntityListField implements TsExpression {
    constructor(
        private fieldName: string,
        private fieldType: string
    ) {}
    tsExpression(): string {
        return `
            ${this.fieldName} : {
                type: "${this.fieldType}"; 
                value: {code: string, name: string}[];
                error?: string;
            };
        `;
    }
}

export class FileField implements TsExpression {
    constructor(
        private fieldName: string,
        private fieldType: string
    ) {}
    tsExpression(): string {
        return `
            ${this.fieldName} : {
                type: "${this.fieldType}";
                value: {
                    contentType: string;
                    fileKey: string;
                    name: string;
                    size: string;
                }[];
                error?: string;
            };
        `;
    }
}

export class SubTableField implements TsExpression {
    constructor(
        private fieldName,
        private fieldType,
        private fieldGroup: FieldGroup
    ) {}
    tsExpression(): string {
        return `
            ${this.fieldName} : {  
                type: "${this.fieldType}";
                value: {
                    id: string;
                    value: {
                        ${this.fieldGroup.tsExpression()}
                    }
                }[];
            };
        `;
    }
}
