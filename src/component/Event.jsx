import twoWheeler from "../assets/bycicle (1).png";

export default function Event(props) {
  return (
    <div className="flex justify-center items-center m-10">
      <div className="parent size-74 border-2 border-gray-300 rounded-lg ">
        <div className="img border-2 border-black-500 rounded-lg" onClick={()=>{console.log(props.vehicleDetails)}}>
          <img src={twoWheeler} alt="twoWheeler" />
        </div>
        <div className="info p-2">
          <div className="event">
            <div className="flex justify-between">
              <div>{props.eventName}</div>
              <div>{props.vehiclesType}</div> 
            </div>
            <div className="flex justify-between">
              <div>{props.location}</div>
              <div> No. of VEH. {props.noOfVehicles}</div>
            </div>
            <div className="startEvent flex justify-between">
              <div className="start">Start:</div>
              <div className="startDate">{props.startDate}</div>
            </div>
            <div className="endEvent flex justify-between">
              <div className="end">End:</div>
              <div className="endDate">{props.endDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
