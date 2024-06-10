import { v4 } from 'uuid';

export const initialData = [
  {
    id: 1,
    createdAt: "2024-06-07T10:31:11.238Z",
    updatedAt: "2024-06-07T10:31:11.238Z",
    eventName: "Manappuram Finance",
    locationOfEvent: {
      address: "123 Main St",
      state: "Bihar",
      pinCode: 123412,
    },
    vehicleDetails: [
      {
        id: v4(),
        typeOfVehicle: "two-wheeler",
        name: "Hero",
        milage: "47km/l",
        loanAccountNumber: "KA3025TW30502",
        registeredOwner: "VIKRAMA N",
        regNumber: "KA20EG5659",
        yearOfRegistration: 2014,
        yardName: "INTACT AUTOPARC INDIA PVT LTD",
        engineNo: "0G3DE2309814",
        chasisNo: "MD626BG32E2D37828",
        fuelType: "Petrol",
        color: "black"
      },
      {
        id: v4(),
        typeOfVehicle: "four-wheeler",
        name: "Maruti Suzuki",
        milage: "21km/l",
        loanAccountNumber: "KA3025FW30503",
        registeredOwner: "RAJESH K",
        regNumber: "KA01AB1234",
        yearOfRegistration: 2018,
        yardName: "SOUTHERN AUTOPARC",
        engineNo: "1HGCM82633A123456",
        chasisNo: "2HGFG1182GH701408",
        fuelType: "Diesel",
        color: "white"
      }
    ],
    parkingAddress: {
      address: "456 Side St",
      city: "Patna",
      nearBy: "Patna Junction",
      pinCode: 800001,
      state: "Bihar"
    },
    startDateTime: "2024-06-07T10:31:11.238Z",
    endDateTime: "2024-06-07T12:31:11.238Z",
    startPrice: 5000,
    bidIncrease: 100,
  },
  {
    id: 2,
    createdAt: "2024-06-08T11:15:45.238Z",
    updatedAt: "2024-06-08T11:15:45.238Z",
    eventName: "HDFC Bank Auction",
    locationOfEvent: {
      address: "789 Market St",
      state: "Karnataka",
      pinCode: 560001,
    },
    vehicleDetails: [
      {
        id: v4(),
        typeOfVehicle: "four-wheeler",
        name: "Hyundai",
        milage: "19km/l",
        loanAccountNumber: "KA3025FW30504",
        registeredOwner: "ANIL K",
        regNumber: "KA03AB5678",
        yearOfRegistration: 2016,
        yardName: "AUTOPARC SOUTH",
        engineNo: "2HGEJ667XTH501234",
        chasisNo: "3HGEJ6670TH301234",
        fuelType: "Petrol",
        color: "blue"
      },
      {
        id: v4(),
        typeOfVehicle: "six-wheeler",
        name: "Hyundai",
        milage: "19km/l",
        loanAccountNumber: "KA3025FW30504",
        registeredOwner: "ANIL K",
        regNumber: "KA03AB5678",
        yearOfRegistration: 2016,
        yardName: "AUTOPARC SOUTH",
        engineNo: "2HGEJ667XTH501234",
        chasisNo: "3HGEJ6670TH301234",
        fuelType: "Petrol",
        color: "blue"
      },
      {
        id: v4(),
        typeOfVehicle: "two-wheeler",
        name: "Yamaha",
        milage: "42km/l",
        loanAccountNumber: "KA3025TW30505",
        registeredOwner: "SUNIL R",
        regNumber: "KA04XY6789",
        yearOfRegistration: 2017,
        yardName: "NORTHERN AUTOPARC",
        engineNo: "4GCRH112XK501234",
        chasisNo: "5HCRH112XK301234",
        fuelType: "Petrol",
        color: "red"
      }
    ],
    parkingAddress: {
      address: "101 Circle St",
      city: "Bangalore",
      nearBy: "MG Road",
      pinCode: 560001,
      state: "Karnataka"
    },
    startDateTime: "2024-06-09T10:00:00.000Z",
    endDateTime: "2024-06-09T14:00:00.000Z",
    startPrice: 6000,
    bidIncrease: 200,
  },
  {
    id: 3,
    createdAt: "2024-06-09T09:45:22.238Z",
    updatedAt: "2024-06-09T09:45:22.238Z",
    eventName: "ICICI Bank Auction",
    locationOfEvent: {
      address: "202 Hill St",
      state: "Maharashtra",
      pinCode: 400001,
    },
    vehicleDetails: [
      {
        id: v4(),
        typeOfVehicle: "four-wheeler",
        name: "Tata",
        milage: "20km/l",
        loanAccountNumber: "MH3025FW30506",
        registeredOwner: "KIRAN S",
        regNumber: "MH12AB3456",
        yearOfRegistration: 2015,
        yardName: "WESTERN AUTOPARC",
        engineNo: "6HGBH41JXMN123456",
        chasisNo: "7HGBH41JXMN123456",
        fuelType: "Diesel",
        color: "silver"
      },
      {
        id: v4(),
        typeOfVehicle: "two-wheeler",
        name: "Honda",
        milage: "45km/l",
        loanAccountNumber: "MH3025TW30507",
        registeredOwner: "PRIYA M",
        regNumber: "MH14XY1234",
        yearOfRegistration: 2019,
        yardName: "EASTERN AUTOPARC",
        engineNo: "8GCHR214XK501234",
        chasisNo: "9HCHR214XK301234",
        fuelType: "Petrol",
        color: "green"
      }
    ],
    parkingAddress: {
      address: "303 Lake St",
      city: "Mumbai",
      nearBy: "Gateway of India",
      pinCode: 400001,
      state: "Maharashtra"
    },
    startDateTime: "2024-06-10T09:00:00.000Z",
    endDateTime: "2024-06-10T15:00:00.000Z",
    startPrice: 7000,
    bidIncrease: 150,
  },
  {
    id: 4,
    createdAt: "2024-06-10T12:30:33.238Z",
    updatedAt: "2024-06-10T12:30:33.238Z",
    eventName: "Bajaj Finance Auction",
    locationOfEvent: {
      address: "404 Green St",
      state: "Tamil Nadu",
      pinCode: 600001,
    },
    vehicleDetails: [
      {
        id: v4(),
        typeOfVehicle: "four-wheeler",
        name: "Ford",
        milage: "18km/l",
        loanAccountNumber: "TN3025FW30508",
        registeredOwner: "DINESH B",
        regNumber: "TN09CD6789",
        yearOfRegistration: 2020,
        yardName: "CENTRAL AUTOPARC",
        engineNo: "1HGEM2290XL123456",
        chasisNo: "2HGEM2290XL123456",
        fuelType: "Petrol",
        color: "yellow"
      },
      {
        id: v4(),
        typeOfVehicle: "two-wheeler",
        name: "Suzuki",
        milage: "50km/l",
        loanAccountNumber: "TN3025TW30509",
        registeredOwner: "SNEHA R",
        regNumber: "TN10XY4567",
        yearOfRegistration: 2021,
        yardName: "NORTHERN AUTOPARC",
        engineNo: "3HGEM2290XL123456",
        chasisNo: "4HGEM2290XL123456",
        fuelType: "Petrol",
        color: "purple"
      }
    ],
    parkingAddress: {
      address: "505 Beach St",
      city: "Chennai",
      nearBy: "Marina Beach",
      pinCode: 600001,
      state: "Tamil Nadu"
    },
    startDateTime: "2024-06-11T08:00:00.000Z",
    endDateTime: "2024-06-11T12:00:00.000Z",
    startPrice: 8000,
    bidIncrease: 250,
  },
  {
    id: 5,
    createdAt: "2024-06-11T10:15:50.238Z",
    updatedAt: "2024-06-11T10:15:50.238Z",
    eventName: "Axis Bank Auction",
    locationOfEvent: {
      address: "606 Park Ave",
      state: "West Bengal",
      pinCode: 700001,
    },
    vehicleDetails: [
      {
        id: v4(),
        typeOfVehicle: "four-wheeler",
        name: "Mahindra",
        milage: "22km/l",
        loanAccountNumber: "WB3025FW30510",
        registeredOwner: "NITIN P",
        regNumber: "WB12EF3456",
        yearOfRegistration: 2019,
        yardName: "EASTERN AUTOPARC",
        engineNo: "5HGEM2290XL123456",
        chasisNo: "6HGEM2290XL123456",
        fuelType: "Diesel",
        color: "orange"
      },
      {
        id: v4(),
        typeOfVehicle: "two-wheeler",
        name: "Bajaj",
        milage: "55km/l",
        loanAccountNumber: "WB3025TW30511",
        registeredOwner: "ROHAN G",
        regNumber: "WB14XY6789",
        yearOfRegistration: 2022,
        yardName: "SOUTHERN AUTOPARC",
        engineNo: "7HGEM2290XL123456",
        chasisNo: "8HGEM2290XL123456",
        fuelType: "Petrol",
        color: "brown"
      }
    ],
    parkingAddress: {
      address: "707 King St",
      city: "Kolkata",
      nearBy: "Victoria Memorial",
      pinCode: 700001,
      state: "West Bengal"
    },
    startDateTime: "2024-06-12T09:00:00.000Z",
    endDateTime: "2024-06-12T17:00:00.000Z",
    startPrice: 9000,
    bidIncrease: 300,
  },
  {
    id: 6,
    createdAt: "2024-06-12T08:30:25.238Z",
    updatedAt: "2024-06-12T08:30:25.238Z",
    eventName: "Kotak Mahindra Auction",
    locationOfEvent: {
      address: "808 Central Ave",
      state: "Gujarat",
      pinCode: 380001,
    },
    vehicleDetails: [
      {
        id: v4(),
        typeOfVehicle: "four-wheeler",
        name: "Renault",
        milage: "24km/l",
        loanAccountNumber: "GJ3025FW30512",
        registeredOwner: "AJAY T",
        regNumber: "GJ01GH1234",
        yearOfRegistration: 2021,
        yardName: "WESTERN AUTOPARC",
        engineNo: "9HGEM2290XL123456",
        chasisNo: "0HGEM2290XL123456",
        fuelType: "Petrol",
        color: "cyan"
      },
      {
        id: v4(),
        typeOfVehicle: "two-wheeler",
        name: "TVS",
        milage: "60km/l",
        loanAccountNumber: "GJ3025TW30513",
        registeredOwner: "VISHAL M",
        regNumber: "GJ05XY3456",
        yearOfRegistration: 2023,
        yardName: "NORTHERN AUTOPARC",
        engineNo: "1HGEM2290YL123456",
        chasisNo: "2HGEM2290YL123456",
        fuelType: "Petrol",
        color: "magenta"
      }
    ],
    parkingAddress: {
      address: "909 State St",
      city: "Ahmedabad",
      nearBy: "Sabarmati Ashram",
      pinCode: 380001,
      state: "Gujarat"
    },
    startDateTime: "2024-06-13T10:00:00.000Z",
    endDateTime: "2024-06-13T18:00:00.000Z",
    startPrice: 10000,
    bidIncrease: 350,
  },
  {
    id: 7,
    createdAt: "2024-06-13T09:10:22.238Z",
    updatedAt: "2024-06-13T09:10:22.238Z",
    eventName: "SBI Bank Auction",
    locationOfEvent: {
      address: "1001 Elm St",
      state: "Rajasthan",
      pinCode: 302001,
    },
    vehicleDetails: [
      {
        id: v4(),
        typeOfVehicle: "four-wheeler",
        name: "Chevrolet",
        milage: "17km/l",
        loanAccountNumber: "RJ3025FW30514",
        registeredOwner: "RAVI S",
        regNumber: "RJ14CD5678",
        yearOfRegistration: 2018,
        yardName: "SOUTHERN AUTOPARC",
        engineNo: "3HGEM2290XL123456",
        chasisNo: "4HGEM2290XL123456",
        fuelType: "Diesel",
        color: "white"
      },
      {
        id: v4(),
        typeOfVehicle: "two-wheeler",
        name: "Royal Enfield",
        milage: "35km/l",
        loanAccountNumber: "RJ3025TW30515",
        registeredOwner: "NISHA K",
        regNumber: "RJ16XY7890",
        yearOfRegistration: 2022,
        yardName: "EASTERN AUTOPARC",
        engineNo: "5HGEM2290YL123456",
        chasisNo: "6HGEM2290YL123456",
        fuelType: "Petrol",
        color: "red"
      }
    ],
    parkingAddress: {
      address: "1102 Ash St",
      city: "Jaipur",
      nearBy: "Hawa Mahal",
      pinCode: 302001,
      state: "Rajasthan"
    },
    startDateTime: "2024-06-14T11:00:00.000Z",
    endDateTime: "2024-06-14T15:00:00.000Z",
    startPrice: 11000,
    bidIncrease: 400,
  },
  {
    id: 8,
    createdAt: "2024-06-14T11:45:33.238Z",
    updatedAt: "2024-06-14T11:45:33.238Z",
    eventName: "Bank of Baroda Auction",
    locationOfEvent: {
      address: "1203 Cedar St",
      state: "Punjab",
      pinCode: 160001,
    },
    vehicleDetails: [
      {
        id: v4(),
        typeOfVehicle: "four-wheeler",
        name: "Toyota",
        milage: "23km/l",
        loanAccountNumber: "PB3025FW30516",
        registeredOwner: "ARJUN D",
        regNumber: "PB02EF7890",
        yearOfRegistration: 2020,
        yardName: "CENTRAL AUTOPARC",
        engineNo: "7HGEM2290XL123456",
        chasisNo: "8HGEM2290XL123456",
        fuelType: "Petrol",
        color: "green"
      },
      {
        id: v4(),
        typeOfVehicle: "two-wheeler",
        name: "KTM",
        milage: "38km/l",
        loanAccountNumber: "PB3025TW30517",
        registeredOwner: "DIVYA J",
        regNumber: "PB04XY1234",
        yearOfRegistration: 2021,
        yardName: "NORTHERN AUTOPARC",
        engineNo: "9HGEM2290XL123456",
        chasisNo: "0HGEM2290XL123456",
        fuelType: "Petrol",
        color: "blue"
      }
    ],
    parkingAddress: {
      address: "1304 Birch St",
      city: "Chandigarh",
      nearBy: "Rock Garden",
      pinCode: 160001,
      state: "Punjab"
    },
    startDateTime: "2024-06-15T09:00:00.000Z",
    endDateTime: "2024-06-15T13:00:00.000Z",
    startPrice: 12000,
    bidIncrease: 450,
  },
  {
    id: 9,
    createdAt: "2024-06-15T10:25:22.238Z",
    updatedAt: "2024-06-15T10:25:22.238Z",
    eventName: "IDBI Bank Auction",
    locationOfEvent: {
      address: "1405 Maple St",
      state: "Haryana",
      pinCode: 122001,
    },
    vehicleDetails: [
      {
        id: v4(),
        typeOfVehicle: "four-wheeler",
        name: "Volkswagen",
        milage: "26km/l",
        loanAccountNumber: "HR3025FW30518",
        registeredOwner: "GAURAV N",
        regNumber: "HR26GH5678",
        yearOfRegistration: 2019,
        yardName: "WESTERN AUTOPARC",
        engineNo: "1HGEM2290XL789012",
        chasisNo: "2HGEM2290XL789012",
        fuelType: "Diesel",
        color: "yellow"
      },
      {
        id: v4(),
        typeOfVehicle: "two-wheeler",
        name: "Bajaj",
        milage: "40km/l",
        loanAccountNumber: "HR3025TW30519",
        registeredOwner: "JAYANTH K",
        regNumber: "HR28XY6789",
        yearOfRegistration: 2020,
        yardName: "NORTHERN AUTOPARC",
        engineNo: "3HGEM2290XL789012",
        chasisNo: "4HGEM2290XL789012",
        fuelType: "Petrol",
        color: "black"
      }
    ],
    parkingAddress: {
      address: "1506 Oak St",
      city: "Gurugram",
      nearBy: "Cyber Hub",
      pinCode: 122001,
      state: "Haryana"
    },
    startDateTime: "2024-06-16T10:00:00.000Z",
    endDateTime: "2024-06-16T16:00:00.000Z",
    startPrice: 13000,
    bidIncrease: 500,
  },
  {
    id: 10,
    createdAt: "2024-06-16T09:30:40.238Z",
    updatedAt: "2024-06-16T09:30:40.238Z",
    eventName: "PNB Bank Auction",
    locationOfEvent: {
      address: "1607 Pine St",
      state: "Uttar Pradesh",
      pinCode: 226001,
    },
    vehicleDetails: [
      {
        id: v4(),
        typeOfVehicle: "four-wheeler",
        name: "Skoda",
        milage: "28km/l",
        loanAccountNumber: "UP3025FW30520",
        registeredOwner: "SHIVAM S",
        regNumber: "UP01AB7890",
        yearOfRegistration: 2017,
        yardName: "CENTRAL AUTOPARC",
        engineNo: "1HGEM2290XL789012",
        chasisNo: "2HGEM2290XL789012",
        fuelType: "Petrol",
        color: "red"
      },
      {
        id: v4(),
        typeOfVehicle: "two-wheeler",
        name: "Hero",
        milage: "48km/l",
        loanAccountNumber: "UP3025TW30521",
        registeredOwner: "RAHUL M",
        regNumber: "UP02XY2345",
        yearOfRegistration: 2018,
        yardName: "EASTERN AUTOPARC",
        engineNo: "3HGEM2290XL789012",
        chasisNo: "4HGEM2290XL789012",
        fuelType: "Petrol",
        color: "blue"
      }
    ],
    parkingAddress: {
      address: "1708 Cedar St",
      city: "Lucknow",
      nearBy: "Bara Imambara",
      pinCode: 226001,
      state: "Uttar Pradesh"
    },
    startDateTime: "2024-06-17T11:00:00.000Z",
    endDateTime: "2024-06-17T15:00:00.000Z",
    startPrice: 14000,
    bidIncrease: 550,
  }
];