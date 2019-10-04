declare namespace kintone.types {
  interface TestFields {
    "・": kintone.types.fields.SingleLineText;
    "＄": kintone.types.fields.SingleLineText;
    "￥": kintone.types.fields.SingleLineText;
    "＿": kintone.types.fields.SingleLineText;
  }
  interface SavedTestFields extends TestFields {
    $id: kintone.types.fields.Id;
    $revision: kintone.types.fields.Revision;
    Updated_by: kintone.types.fields.Modifier;
    Created_by: kintone.types.fields.Creator;
    Record_number: kintone.types.fields.RecordNumber;
    Updated_datetime: kintone.types.fields.UpdatedTime;
    Created_datetime: kintone.types.fields.CreatedTime;
  }
}
