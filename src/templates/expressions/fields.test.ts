import {
    ConvertibleByKintoneTypeField,
    SubTableField,
    FileField,
    FieldGroup,
    CalculatedField,
} from "./fields";

describe("ConvertibleByKintoneTypeField with SINGLE_LINE_TEXT", () => {
    test("toTsExpression()", () => {
        expect(
            new ConvertibleByKintoneTypeField(
                "fieldName",
                "SINGLE_LINE_TEXT"
            )
                .tsExpression()
                .trim()
        ).toEqual(
            `"fieldName" : kintone.types.fields.SingleLineText;`.trim()
        );
    });
});

describe("ConvertibleByKintoneTypeField with Full Width Symbol FieldCode", () => {
    test("toTsExpression() with ・", () => {
        expect(
            new ConvertibleByKintoneTypeField(
                "・",
                "SINGLE_LINE_TEXT"
            )
                .tsExpression()
                .trim()
        ).toEqual(
            `"・" : kintone.types.fields.SingleLineText;`.trim()
        );
    });
    test("toTsExpression() with ￥", () => {
        expect(
            new ConvertibleByKintoneTypeField(
                "￥",
                "SINGLE_LINE_TEXT"
            )
                .tsExpression()
                .trim()
        ).toEqual(
            `"￥" : kintone.types.fields.SingleLineText;`.trim()
        );
    });
    test("toTsExpression() with ＿", () => {
        expect(
            new ConvertibleByKintoneTypeField(
                "＿",
                "SINGLE_LINE_TEXT"
            )
                .tsExpression()
                .trim()
        ).toEqual(
            `"＿" : kintone.types.fields.SingleLineText;`.trim()
        );
    });
    test("toTsExpression() with ＄", () => {
        expect(
            new ConvertibleByKintoneTypeField(
                "＄",
                "SINGLE_LINE_TEXT"
            )
                .tsExpression()
                .trim()
        ).toEqual(
            `"＄" : kintone.types.fields.SingleLineText;`.trim()
        );
    });
});

describe("ConvertibleByKintoneTypeField with CHECK_BOX", () => {
    test("toTsExpression()", () => {
        expect(
            new ConvertibleByKintoneTypeField(
                "fieldName",
                "CHECK_BOX"
            )
                .tsExpression()
                .trim()
        ).toEqual(
            `"fieldName" : kintone.types.fields.CheckBox;`.trim()
        );
    });
});

describe("ConvertibleByKintoneTypeField with USER_SELECT", () => {
    test("toTsExpression()", () => {
        expect(
            new ConvertibleByKintoneTypeField(
                "fieldName",
                "USER_SELECT"
            )
                .tsExpression()
                .trim()
        ).toEqual(
            `"fieldName" : kintone.types.fields.UserSelect;`.trim()
        );
    });
});

describe("SubTableField", () => {
    test("toTsExpression()", () => {
        const fieldGroup = new FieldGroup(
            [],
            [],
            [],
            [],
            []
        );
        expect(
            new SubTableField(
                "fieldName",
                "SUBTABLE",
                fieldGroup
            )
                .tsExpression()
                .trim()
        ).toEqual(
            `
"fieldName" : {
    type: "SUBTABLE";
    value: {
        id: string;
        value: {
            
        }
    }[];
};`.trim()
        );
    });
});

describe("FileField", () => {
    test("toTsExpression()", () => {
        expect(
            new FileField("fieldName").tsExpression().trim()
        ).toEqual(
            `"fieldName" : kintone.types.fields.File;`.trim()
        );
    });
});

describe("FieldGroup", () => {
    test("toTsExpression()", () => {
        expect(
            new FieldGroup(
                [
                    new ConvertibleByKintoneTypeField(
                        "fieldName1",
                        "SINGLE_LINE_TEXT"
                    ),
                    new ConvertibleByKintoneTypeField(
                        "fieldName2",
                        "SINGLE_LINE_TEXT"
                    ),
                ],
                [new CalculatedField("fieldName3")],
                [
                    new ConvertibleByKintoneTypeField(
                        "fieldName4",
                        "MULTI_SELECT"
                    ),
                ],
                [
                    new ConvertibleByKintoneTypeField(
                        "fieldName5",
                        "USER_SELECT"
                    ),
                ],
                [new FileField("fieldName6")]
            )
                .tsExpression()
                .trim()
        ).toEqual(
            `
"fieldName1" : kintone.types.fields.SingleLineText;
"fieldName2" : kintone.types.fields.SingleLineText;
"fieldName3" : kintone.types.fields.Calc;
"fieldName4" : kintone.types.fields.MultiSelect;
"fieldName5" : kintone.types.fields.UserSelect;
"fieldName6" : kintone.types.fields.File;`.trim()
        );
    });
});
