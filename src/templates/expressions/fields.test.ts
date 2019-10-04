import {
    StringField,
    StringListField,
    EntityListField,
    SubTableField,
    FileField,
    FieldGroup,
    CalculatedField,
} from "./fields";

describe("StringField", () => {
    test("toTsExpression()", () => {
        expect(
            new StringField("fieldName", "SINGLE_LINE_TEXT")
                .tsExpression()
                .trim()
        ).toEqual(
            `"fieldName" : kintone.types.fields.SingleLineText;`.trim()
        );
    });
});

describe("StringField with Full Width Symbol FieldCode", () => {
    test("toTsExpression() with ・", () => {
        expect(
            new StringField("・", "SINGLE_LINE_TEXT")
                .tsExpression()
                .trim()
        ).toEqual(
            `"・" : kintone.types.fields.SingleLineText;`.trim()
        );
    });
    test("toTsExpression() with ￥", () => {
        expect(
            new StringField("￥", "SINGLE_LINE_TEXT")
                .tsExpression()
                .trim()
        ).toEqual(
            `"￥" : kintone.types.fields.SingleLineText;`.trim()
        );
    });
    test("toTsExpression() with ＿", () => {
        expect(
            new StringField("＿", "SINGLE_LINE_TEXT")
                .tsExpression()
                .trim()
        ).toEqual(
            `"＿" : kintone.types.fields.SingleLineText;`.trim()
        );
    });
    test("toTsExpression() with ＄", () => {
        expect(
            new StringField("＄", "SINGLE_LINE_TEXT")
                .tsExpression()
                .trim()
        ).toEqual(
            `"＄" : kintone.types.fields.SingleLineText;`.trim()
        );
    });
});

describe("StringListField", () => {
    test("toTsExpression()", () => {
        expect(
            new StringListField("fieldName", "CHECK_BOX")
                .tsExpression()
                .trim()
        ).toEqual(
            `"fieldName" : kintone.types.fields.CheckBox;`.trim()
        );
    });
});

describe("EntityListField", () => {
    test("toTsExpression()", () => {
        expect(
            new EntityListField("fieldName", "USER_SELECT")
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
            `
"fieldName" : kintone.types.fields.File;`.trim()
        );
    });
});

describe("FieldGroup", () => {
    test("toTsExpression()", () => {
        expect(
            new FieldGroup(
                [
                    new StringField(
                        "fieldName1",
                        "SINGLE_LINE_TEXT"
                    ),
                    new StringField(
                        "fieldName2",
                        "SINGLE_LINE_TEXT"
                    ),
                ],
                [new CalculatedField("fieldName3")],
                [
                    new StringListField(
                        "fieldName4",
                        "MULTI_SELECT"
                    ),
                ],
                [
                    new EntityListField(
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
