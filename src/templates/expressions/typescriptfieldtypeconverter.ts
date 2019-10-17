const KintoneStringFieldTypeAndTypeScriptFieldTypeName = {
    SINGLE_LINE_TEXT: "kintone.types.fields.SingleLineText",
    MULTI_LINE_TEXT: "kintone.types.fields.MultiLineText",
    RICH_TEXT: "kintone.types.fields.RichText",
    DATE: "kintone.types.fields.Date",
    CALC: "kintone.types.fields.Calc",
    FILE: "kintone.types.fields.File",
    NUMBER: "kintone.types.fields.Number",
    DATETIME: "kintone.types.fields.DateTime",
    TIME: "kintone.types.fields.Time",
    DROP_DOWN: "kintone.types.fields.DropDown",
    LINK: "kintone.types.fields.Link",
    RADIO_BUTTON: "kintone.types.fields.RadioButton",
    CHECK_BOX: "kintone.types.fields.CheckBox",
    MULTI_SELECT: "kintone.types.fields.MultiSelect",
    RECORD_NUMBER: "kintone.types.fields.RecordNumber",
    CREATED_TIME: "kintone.types.fields.CreatedTime",
    UPDATED_TIME: "kintone.types.fields.UpdatedTime",
    MODIFIER: "kintone.types.fields.Modifier",
    CREATOR: "kintone.types.fields.Creator",
    USER_SELECT: "kintone.types.fields.UserSelect",
    GROUP_SELECT: "kintone.types.fields.GroupSelect",
    ORGANIZATION_SELECT:
        "kintone.types.fields.OrganizationSelect",
};

function convert(typeName: string) {
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

export const KintoneFieldTypeToTypeScriptFieldTypeNameConverter = {
    convert,
};
