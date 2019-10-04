const KintoneStringFieldTypeAndTypeScriptFieldTypeName = {
    SINGLE_LINE_TEXT: "kintone.types.fields.SingleLineText",
    MULTI_LINE_TEXT: "kintone.types.fields.MultiLineText",
    RICH_TEXT: "kintone.types.fields.RichText",
    DATE: "kintone.types.fields.Date",
    NUMBER: "kintone.types.fields.Number",
    DATETIME: "kintone.types.fields.DateTime",
    TIME: "kintone.types.fields.Time",
    DROP_DOWN: "kintone.types.fields.DropDown",
    LINK: "kintone.types.fields.Link",
    RADIO_BUTTON: "kintone.types.fields.RadioButton",
};

function convertStringField(typeName: string) {
    const typeScriptFieldType =
        KintoneStringFieldTypeAndTypeScriptFieldTypeName[
            typeName
        ];
    if (!typeScriptFieldType) {
        throw new Error(
            `${typeName} is not mapped to kintone.types.fields.[TypeName]`
        );
    }
    return typeScriptFieldType;
}

const KintoneStringListFieldTypeAndTypeScriptFieldTypeName = {
    CHECK_BOX: "kintone.types.fields.CheckBox",
    MULTI_SELECT: "kintone.types.fields.MultiSelect",
};

function convertStringListField(typeName: string) {
    const typeScriptFieldType =
        KintoneStringListFieldTypeAndTypeScriptFieldTypeName[
            typeName
        ];
    if (!typeScriptFieldType) {
        throw new Error(
            `${typeName} is not mapped to kintone.types.fields.[TypeName]`
        );
    }
    return typeScriptFieldType;
}

const KintoneSimpleValueInSavedRecordAndAndTypeScriptFieldTypeName = {
    RECORD_NUMBER: "kintone.types.fields.RecordNumber",
    CREATED_TIME: "kintone.types.fields.CreatedTime",
    UPDATED_TIME: "kintone.types.fields.UpdatedTime",
};

function convertFieldsInSavedRecord(typeName: string) {
    const typeScriptFieldType =
        KintoneSimpleValueInSavedRecordAndAndTypeScriptFieldTypeName[
            typeName
        ];
    if (!typeScriptFieldType) {
        throw new Error(
            `${typeName} is not mapped to kintone.types.fields.[TypeName]`
        );
    }
    return typeScriptFieldType;
}

const KintoneUserFieldAndTypeScriptFieldTypeName = {
    MODIFIER: "kintone.types.fields.Modifier",
    CREATOR: "kintone.types.fields.Creator",
};

function convertUserField(typeName: string) {
    const typeScriptFieldType =
        KintoneUserFieldAndTypeScriptFieldTypeName[
            typeName
        ];
    if (!typeScriptFieldType) {
        throw new Error(
            `${typeName} is not mapped to kintone.types.fields.[TypeName]`
        );
    }
    return typeScriptFieldType;
}

const KintoneEntityListFieldAndTypeScriptFieldTypeNam = {
    USER_SELECT: "kintone.types.fields.UserSelect",
    GROUP_SELECT: "kintone.types.fields.GroupSelect",
    ORGANIZATION_SELECT:
        "kintone.types.fields.OrganizationSelect",
};

function convertEntityListField(typeName: string) {
    const typeScriptFieldType =
        KintoneEntityListFieldAndTypeScriptFieldTypeNam[
            typeName
        ];
    if (!typeScriptFieldType) {
        throw new Error(
            `${typeName} is not mapped to kintone.types.fields.[TypeName]`
        );
    }
    return typeScriptFieldType;
}

export const KintoneFieldTypeToTypeScriptFieldTypeNameConverter = {
    convertStringField,
    convertStringListField,
    convertFieldsInSavedRecord,
    convertUserField,
    convertEntityListField,
};
