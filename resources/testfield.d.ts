declare namespace kintone.types {
  interface TestFields {
    Text: kintone.definitely.typed.fields.SingleLineText;
    Rich_text: kintone.definitely.typed.fields.RichText;
    Text_area: kintone.definitely.typed.fields.MultiLineText;
    Number: kintone.definitely.typed.fields.Number;
    Radio_button: kintone.definitely.typed.fields.RadioButton;
    Drop_down: kintone.definitely.typed.fields.DropDown;
    Date: kintone.definitely.typed.fields.Date;
    Time: kintone.definitely.typed.fields.Time;
    Date_and_time: kintone.definitely.typed.fields.DateTime;
    Link: kintone.definitely.typed.fields.Link;
    Calculated: kintone.definitely.typed.fields.Calc;
    Check_box: kintone.definitely.typed.fields.CheckBox;
    Multi_choice: kintone.definitely.typed.fields.MultiSelect;
    User_selection: kintone.definitely.typed.fields.UserSelect;
    Department_selection: kintone.definitely.typed.fields.OrganizationSelect;
    Group_selection: kintone.definitely.typed.fields.GroupSelect;
    Attachment: kintone.definitely.typed.fields.File;
    Table: {
      type: "SUBTABLE";
      value: {
        id: string;
        value: {
          Text_Table: kintone.definitely.typed.fields.SingleLineText;
          Rich_text_Table: kintone.definitely.typed.fields.RichText;
          Text_area_Table: kintone.definitely.typed.fields.MultiLineText;
          Number_Table: kintone.definitely.typed.fields.Number;
          Calculated_Table: kintone.definitely.typed.fields.Calc;
        };
      }[];
    };
    Table_0: {
      type: "SUBTABLE";
      value: {
        id: string;
        value: {
          Radio_button_Table: kintone.definitely.typed.fields.RadioButton;
          Drop_down_Table: kintone.definitely.typed.fields.DropDown;
          Date_Table: kintone.definitely.typed.fields.Date;
          Time_Table: kintone.definitely.typed.fields.Time;
          Date_and_time_Table: kintone.definitely.typed.fields.DateTime;
          Link_Table: kintone.definitely.typed.fields.Link;
          Check_box_Table: kintone.definitely.typed.fields.CheckBox;
          Multi_choice_Table: kintone.definitely.typed.fields.MultiSelect;
          Attachment_Table: kintone.definitely.typed.fields.File;
        };
      }[];
    };
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
