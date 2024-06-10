import React from 'react'
import EventList from './EventList'
import Filter from './Filter'
import twoWheeler from "../assets/bycicle (1).png";
import threeWeeler from "../assets/rickshaw.png"
import truck from "../assets/truck.png"

export default function Bid() {
     // add 16 more data in these array

  const vehiclesTypeImg = [
    twoWheeler,
    threeWeeler,
    truck,
    twoWheeler
    
  ]
  const eventname = [
    "Manappuram Finance", "ICICI Bank", "delhi Finance", "goa Finance",
    "Mumbai Finance", "Chennai Finance", "Kolkata Finance", "Pune Finance",
    "Hyderabad Finance", "Ahmedabad Finance", "HDFC Bank", "Lucknow Finance",
    "Kanpur Finance", "Nagpur Finance", "Indore Finance", "Thane Finance",
    "Bhopal Finance", "Patna Finance", "Vadodara Finance", "Ludhiana Finance",0
  ];
  
  const location = [
    "Manappuram", "jaipur", "delhi", "goa",
    "Mumbai", "Chennai", "Kolkata", "Pune",
    "Hyderabad", "Ahmedabad", "Surat", "Lucknow",
    "Kanpur", "Nagpur", "Indore", "Thane",
    "Bhopal", "Patna", "Vadodara", "Ludhiana"
  ];
  
  const startDate = [
    "18-May-2024 18:30", "21-May-2024 18:30", "16-May-2024 18:30", "14-May-2024 18:30",
    "01-Jun-2024 09:00", "05-Jun-2024 11:15", "10-Jun-2024 14:45", "15-Jun-2024 08:30",
    "20-Jun-2024 12:00", "25-Jun-2024 17:30", "30-Jun-2024 10:00", "04-Jul-2024 13:15",
    "09-Jul-2024 09:45", "14-Jul-2024 16:00", "19-Jul-2024 08:15", "24-Jul-2024 11:30",
    "29-Jul-2024 15:00", "03-Aug-2024 10:30", "08-Aug-2024 14:15", "13-Aug-2024 09:00"
  ];
  
  const endDate = [
    "13-May-2024 16:30", "28-May-2024 16:30", "20-May-2024 16:30", "22-May-2024 16:30",
    "02-Jun-2024 17:00", "06-Jun-2024 18:15", "11-Jun-2024 19:45", "16-Jun-2024 16:30",
    "21-Jun-2024 14:00", "26-Jun-2024 18:30", "01-Jul-2024 12:00", "05-Jul-2024 16:15",
    "10-Jul-2024 14:45", "15-Jul-2024 20:00", "20-Jul-2024 16:15", "25-Jul-2024 18:30",
    "30-Jul-2024 22:00", "04-Aug-2024 17:30", "09-Aug-2024 21:15", "14-Aug-2024 16:00"
  ];
  
  const noOfVehicles = [
    28, 5, 8, 78,
    10, 15, 20, 25,
    30, 35, 40, 45,
    50, 55, 60, 65,
    70, 75, 80, 85
  ];
  
  const vehiclesType = [
    "2W", "3W", "4W", "CV",
    "2W", "3W", "4W", "CV",
    "2W", "3W", "4W", "CV",
    "2W", "3W", "4W", "CV",
    "2W", "3W", "4W", "CV"
  ];
  
  return (
    <div>
        <Filter />
        <EventList noOfVehicles={noOfVehicles} location={location} startDate={startDate} endDate={endDate} eventName={eventname} vehiclesType={vehiclesType} vehicleImg={vehiclesTypeImg} />

    </div>
  )
}

