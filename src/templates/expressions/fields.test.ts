import {
    TSDefinedField,
    SubTableField,
    FieldGroup,
} from "./fields";

describe("TSDefinedField with SINGLE_LINE_TEXT", () => {
    test("toTsExpression()", () => {
        expect(
            new TSDefinedField(
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

describe("TSDefinedField with Full Width Symbol FieldCode", () => {
    test("toTsExpression() with ・", () => {
        expect(
            new TSDefinedField("・", "SINGLE_LINE_TEXT")
                .tsExpression()
                .trim()
        ).toEqual(
            `"・" : kintone.types.fields.SingleLineText;`.trim()
        );
    });
    test("toTsExpression() with ￥", () => {
        expect(
            new TSDefinedField("￥", "SINGLE_LINE_TEXT")
                .tsExpression()
                .trim()
        ).toEqual(
            `"￥" : kintone.types.fields.SingleLineText;`.trim()
        );
    });
    test("toTsExpression() with ＿", () => {
        expect(
            new TSDefinedField("＿", "SINGLE_LINE_TEXT")
                .tsExpression()
                .trim()
        ).toEqual(
            `"＿" : kintone.types.fields.SingleLineText;`.trim()
        );
    });
    test("toTsExpression() with ＄", () => {
        expect(
            new TSDefinedField("＄", "SINGLE_LINE_TEXT")
                .tsExpression()
                .trim()
        ).toEqual(
            `"＄" : kintone.types.fields.SingleLineText;`.trim()
        );
    });
});

describe("TSDefinedField with CHECK_BOX", () => {
    test("toTsExpression()", () => {
        expect(
            new TSDefinedField("fieldName", "CHECK_BOX")
                .tsExpression()
                .trim()
        ).toEqual(
            `"fieldName" : kintone.types.fields.CheckBox;`.trim()
        );
    });
});

describe("TSDefinedField with USER_SELECT", () => {
    test("toTsExpression()", () => {
        expect(
            new TSDefinedField("fieldName", "USER_SELECT")
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
            new TSDefinedField("fieldName", "FILE")
                .tsExpression()
                .trim()
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
                    new TSDefinedField(
                        "fieldName1",
                        "SINGLE_LINE_TEXT"
                    ),
                    new TSDefinedField(
                        "fieldName2",
                        "SINGLE_LINE_TEXT"
                    ),
                ],
                [new TSDefinedField("fieldName3", "CALC")],
                [
                    new TSDefinedField(
                        "fieldName4",
                        "MULTI_SELECT"
                    ),
                ],
                [
                    new TSDefinedField(
                        "fieldName5",
                        "USER_SELECT"
                    ),
                ],
                [new TSDefinedField("fieldName6", "FILE")]
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
