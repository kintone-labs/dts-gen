declare namespace kintone.types {
  interface TestFields {
    "・": kintone.definitely.typed.fields.SingleLineText;
    "＄": kintone.definitely.typed.fields.SingleLineText;
    "￥": kintone.definitely.typed.fields.SingleLineText;
    "＿": kintone.definitely.typed.fields.SingleLineText;
  }
  interface SavedTestFields extends TestFields {
    $id: kintone.definitely.typed.fields.Id;
    $revision: kintone.definitely.typed.fields.Revision;
    Updated_by: kintone.definitely.typed.fields.Modifier;
    Created_by: kintone.definitely.typed.fields.Creator;
    Record_number: kintone.definitely.typed.fields.RecordNumber;
    Updated_datetime: kintone.definitely.typed.fields.UpdatedTime;
    Created_datetime: kintone.definitely.typed.fields.CreatedTime;
  }
}
