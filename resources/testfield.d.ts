declare namespace kintone.types {
  interface TestFields {
    Text: kintone.types.fields.SingleLineText;
    Rich_text: kintone.types.fields.RichText;
    Text_area: kintone.types.fields.MultiLineText;
    Number: kintone.types.fields.Number;
    Radio_button: kintone.types.fields.RadioButton;
    Drop_down: kintone.types.fields.DropDown;
    Date: kintone.types.fields.Date;
    Time: kintone.types.fields.Time;
    Date_and_time: kintone.types.fields.DateTime;
    Link: kintone.types.fields.Link;
    Calculated: kintone.types.fields.Calc;
    Check_box: kintone.types.fields.CheckBox;
    Multi_choice: kintone.types.fields.MultiSelect;
    User_selection: kintone.types.fields.UserSelect;
    Department_selection: kintone.types.fields.OrganizationSelect;
    Group_selection: kintone.types.fields.GroupSelect;
    Attachment: kintone.types.fields.File;
    Table: {
      type: "SUBTABLE";
      value: {
        id: string;
        value: {
          Text_Table: kintone.types.fields.SingleLineText;
          Rich_text_Table: kintone.types.fields.RichText;
          Text_area_Table: kintone.types.fields.MultiLineText;
          Number_Table: kintone.types.fields.Number;
          Calculated_Table: kintone.types.fields.Calc;
        };
      }[];
    };
    Table_0: {
      type: "SUBTABLE";
      value: {
        id: string;
        value: {
          Radio_button_Table: kintone.types.fields.RadioButton;
          Drop_down_Table: kintone.types.fields.DropDown;
          Date_Table: kintone.types.fields.Date;
          Time_Table: kintone.types.fields.Time;
          Date_and_time_Table: kintone.types.fields.DateTime;
          Link_Table: kintone.types.fields.Link;
          Check_box_Table: kintone.types.fields.CheckBox;
          Multi_choice_Table: kintone.types.fields.MultiSelect;
          Attachment_Table: kintone.types.fields.File;
        };
      }[];
    };
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
