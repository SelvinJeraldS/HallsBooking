import { configDotenv } from "dotenv";
import express from "express";
const app = express();
configDotenv()
app.use(express.json());
const PORT = process.env.PORT || 5000;

let hall = [
  {
    HallModel: "Normal",
    seats: 70,
    amenities: "WIFI ,Projection,AC",
    price: 35000,
    room_id: 1,
    customerDetails: [
      {
        customerName: "Hementh M C",
        date: new Date("2023-03-21"),
        start: "09:30 AM",
        end: "12:30 PM",
        status: "confirmed",
      },
    ],
  },
  {
    HallModel: "Premium",
    seats: 120,
    amenities: "WIFI ,Projection,AC,",
    price: 60000,
    room_id: 2,
    customerDetails: [
      {
        customerName: "Prakash B",
        date: new Date("2023-03-28"),
        start: "06:00 AM",
        end: "10:30 PM",
        status: "confirmed",
      },
    ],
  },
  {
    HallModel: "Normal",
    seats: 70,
    amenities: "WIFI ,Projection,AC",
    price: 35000,
    hall_id: 3,
    customerDetails: [
      {
        customerName: "Sabari Vikram R",
        date: new Date("2023-03-10"),
        start: "09:30 AM",
        end: "12:30 PM",
        status: "confirmed",
      },
    ],
  },
  {
    HallModel: "Premium",
    seats: 120,
    amenities: "WIFI ,Projection,AC",
    price: 60000,
    hall_id:4,
    customerDetails: [
      {
        customerName: "Prakash B",
        date: new Date("2023-03-28"),
        start: "06:00 AM",
        end: "10:30 PM",
        status: "confirmed",
      },
    ],
  },
];

app.get('/',(req,res)=>{

    res.send("<div>Hall Booking Task</div>")
})

app.post('/createroom',(req,res)=>{
    hall.push({
        HallModel:req.body.HallModel,
        seats:req.body.seats,
        amenities:req.body.amenities,
        price:req.body.price,
        hall_id:1245,
        customerDetails:[{}] 

    })
    res.send("Room Created")
})

app.post("/bookroom",(req,res)=>{
  for(let i=0 ; i<hall.length;i++){
    if (!(hall[i].hall_id===req.body.hall_id)) {
      return res.status(404).send({error:"Not Found"})
      
    } else {
      let booking= {
        customerName: req.body.customerName,
        date: new Date(req.body.date),
        start:req.body.start,
        end: req.body.end,
        status: "confirmed",
      }

      hall[i].customerDetails.forEach((book)=>{

        if(book.date.getTime() == booking.date.getTime() && book.start  === booking.start){
          console.log('IN booking');
        }
        else{
          hall[i].customerDetails.push(booking)
        }
      })
      
    }
  }
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});