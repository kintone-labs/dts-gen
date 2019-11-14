import {
    TsDefinedField,
    SubTableField,
    FieldGroup,
} from "./fields";

describe("TsDefinedField with SINGLE_LINE_TEXT", () => {
    test("toTsExpression()", () => {
        expect(
            new TsDefinedField(
                "fieldName",
                "SINGLE_LINE_TEXT"
            )
                .tsExpression()
                .trim()
        ).toEqual(
            `"fieldName" : kintone.definitely.typed.fields.SingleLineText;`.trim()
        );
    });
});

describe("TsDefinedField with Full Width Symbol FieldCode", () => {
    test("toTsExpression() with ・", () => {
        expect(
            new TsDefinedField("・", "SINGLE_LINE_TEXT")
                .tsExpression()
                .trim()
        ).toEqual(
            `"・" : kintone.definitely.typed.fields.SingleLineText;`.trim()
        );
    });
    test("toTsExpression() with ￥", () => {
        expect(
            new TsDefinedField("￥", "SINGLE_LINE_TEXT")
                .tsExpression()
                .trim()
        ).toEqual(
            `"￥" : kintone.definitely.typed.fields.SingleLineText;`.trim()
        );
    });
    test("toTsExpression() with ＿", () => {
        expect(
            new TsDefinedField("＿", "SINGLE_LINE_TEXT")
                .tsExpression()
                .trim()
        ).toEqual(
            `"＿" : kintone.definitely.typed.fields.SingleLineText;`.trim()
        );
    });
    test("toTsExpression() with ＄", () => {
        expect(
            new TsDefinedField("＄", "SINGLE_LINE_TEXT")
                .tsExpression()
                .trim()
        ).toEqual(
            `"＄" : kintone.definitely.typed.fields.SingleLineText;`.trim()
        );
    });
});

describe("TsDefinedField with CHECK_BOX", () => {
    test("toTsExpression()", () => {
        expect(
            new TsDefinedField("fieldName", "CHECK_BOX")
                .tsExpression()
                .trim()
        ).toEqual(
            `"fieldName" : kintone.definitely.typed.fields.CheckBox;`.trim()
        );
    });
});

describe("TsDefinedField with USER_SELECT", () => {
    test("toTsExpression()", () => {
        expect(
            new TsDefinedField("fieldName", "USER_SELECT")
                .tsExpression()
                .trim()
        ).toEqual(
            `"fieldName" : kintone.definitely.typed.fields.UserSelect;`.trim()
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
            new TsDefinedField("fieldName", "FILE")
                .tsExpression()
                .trim()
        ).toEqual(
            `"fieldName" : kintone.definitely.typed.fields.File;`.trim()
        );
    });
});

describe("FieldGroup", () => {
    test("toTsExpression()", () => {
        expect(
            new FieldGroup(
                [
                    new TsDefinedField(
                        "fieldName1",
                        "SINGLE_LINE_TEXT"
                    ),
                    new TsDefinedField(
                        "fieldName2",
                        "SINGLE_LINE_TEXT"
                    ),
                ],
                [new TsDefinedField("fieldName3", "CALC")],
                [
                    new TsDefinedField(
                        "fieldName4",
                        "MULTI_SELECT"
                    ),
                ],
                [
                    new TsDefinedField(
                        "fieldName5",
                        "USER_SELECT"
                    ),
                ],
                [new TsDefinedField("fieldName6", "FILE")]
            )
                .tsExpression()
                .trim()
        ).toEqual(
            `
"fieldName1" : kintone.definitely.typed.fields.SingleLineText;
"fieldName2" : kintone.definitely.typed.fields.SingleLineText;
"fieldName3" : kintone.definitely.typed.fields.Calc;
"fieldName4" : kintone.definitely.typed.fields.MultiSelect;
"fieldName5" : kintone.definitely.typed.fields.UserSelect;
"fieldName6" : kintone.definitely.typed.fields.File;`.trim()
        );
    });
});
