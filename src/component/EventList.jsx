import Event from "./Event";
import { initialData } from "../db/sample";
import { getUniqueVehicleType } from "../utils/utility";

export default function EventList(props) {
  return (
    <div className=" items-center grid grid-cols-4 gap-4">
      
      {
        initialData.map((event=>{
          return(
            <Event eventName={event.eventName} 
              key={event.id}
              location={event.locationOfEvent.state}
              startDate={event.startDateTime}
              endDate={event.endDateTime}
              noOfVehicles={event.vehicleDetails.length}
              vehiclesType={getUniqueVehicleType(event.vehicleDetails)}
              vehicleDetails={event.vehicleDetails}
             />
          );
        }))
      }
    </div>
  );
}
