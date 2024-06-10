import dayjs, { Dayjs } from "dayjs";
import States from "./States";
import { DatePicker, Space } from "antd";
import "./Date.css";
import BankInsuranceName from "./BankInsuranceName";
import SearchBtn from "./SearchBtn";
import Vehicle from "./Vehicle";

export default function Filter() {
  return (
    // in the start date pass todays date as porps

    <div className="flex  items-center p-2 mx-10 mt-5 ">
      <div>
        <h2 className="text-2xl ">Filter by:</h2>
      </div>
      <div className="flex justify-center items-center ml-5">
        <States />
      </div>
      <div className="ml-5">
        <BankInsuranceName />
      </div>
      <div className="ml-5">
        <DatePicker.RangePicker className="custom-date-picker h-11"
          defaultValue={[dayjs(), ""]}
          format="DD/MM/YYYY"
          onChange={(value, dateString) => {
            console.log(value, dateString);
          }}
        />
      </div>
      <div className="ml-5">
        <Vehicle />
      </div>    
    </div>
  );
}
