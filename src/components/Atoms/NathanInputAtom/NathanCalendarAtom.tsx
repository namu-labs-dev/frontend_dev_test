import React from "react";
import { DatePicker, Space } from "antd";
import type { DatePickerProps, GetProps } from "antd";

type RangePickerProps = GetProps<typeof DatePicker.RangePicker>;

const { RangePicker } = DatePicker;

const onOk = (value: DatePickerProps["value"] | RangePickerProps["value"]) => {
  console.log("onOk: ", value);
};

const DatePickerAtom: React.FC = () => (
  <Space direction="vertical" size={10}>
    <DatePicker
      style={{ width: "100%" }}
      showTime
      placeholder="2024-09-06"
      onChange={(value, dateString) => {
        console.log("Selected Time: ", value);
        console.log("Formatted Selected Time: ", dateString);
      }}
      onOk={onOk}
    />
  </Space>
);

export default DatePickerAtom;
