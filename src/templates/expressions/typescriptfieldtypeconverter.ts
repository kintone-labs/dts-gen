const KintoneFieldTypeAndTypeScriptFieldTypeName = {
    SINGLE_LINE_TEXT:
        "kintone.definitely.typed.fields.SingleLineText",
    MULTI_LINE_TEXT:
        "kintone.definitely.typed.fields.MultiLineText",
    RICH_TEXT: "kintone.definitely.typed.fields.RichText",
    DATE: "kintone.definitely.typed.fields.Date",
    CALC: "kintone.definitely.typed.fields.Calc",
    FILE: "kintone.definitely.typed.fields.File",
    NUMBER: "kintone.definitely.typed.fields.Number",
    DATETIME: "kintone.definitely.typed.fields.DateTime",
    TIME: "kintone.definitely.typed.fields.Time",
    DROP_DOWN: "kintone.definitely.typed.fields.DropDown",
    LINK: "kintone.definitely.typed.fields.Link",
    RADIO_BUTTON:
        "kintone.definitely.typed.fields.RadioButton",
    CHECK_BOX: "kintone.definitely.typed.fields.CheckBox",
    MULTI_SELECT:
        "kintone.definitely.typed.fields.MultiSelect",
    RECORD_NUMBER:
        "kintone.definitely.typed.fields.RecordNumber",
    CREATED_TIME:
        "kintone.definitely.typed.fields.CreatedTime",
    UPDATED_TIME:
        "kintone.definitely.typed.fields.UpdatedTime",
    MODIFIER: "kintone.definitely.typed.fields.Modifier",
    CREATOR: "kintone.definitely.typed.fields.Creator",
    USER_SELECT:
        "kintone.definitely.typed.fields.UserSelect",
    GROUP_SELECT:
        "kintone.definitely.typed.fields.GroupSelect",
    ORGANIZATION_SELECT:
        "kintone.definitely.typed.fields.OrganizationSelect",
};

function convert(typeName: string) {
    const typeScriptFieldType =
        KintoneFieldTypeAndTypeScriptFieldTypeName[
            typeName
        ];
    if (!typeScriptFieldType) {
        throw new Error(
            `${typeName} is not mapped to kintone.definitely.typed.fields[TypeName]`
        );
    }
    return typeScriptFieldType;
}

export const Converter = {
    convert,
};
