const express = require('express');
const router = express.Router();
const Car=require("./Model/CarModel");
const Upload =require("./Model/Uploading");

    router.post("/", (req, res) => {
        const note= req.body;
        const newUpload = new Upload({
          username:note.Username,
          mobile:note.Mobile,
          city:note.City,
          pin:note.Pin,
          car:note.Car,
          modelyear:note.Modelyear,
          kms:note.Kms,
          insurance:note.Insurance,
          owners:note.Woners
        })

        newUpload.save()
                 .then(user =>
                  {
                    if(!user)
                    return res.status(404).json({"error":"user notstored"})
                    console.log(user);
                    res.status(200).json({"success":"user stored successfully"})
                  })
                  .catch(err => console.log(err)); 
    });
    router.get("/allcars", (req, res) => {
        Upload.find({})
              .then((cars)=>{if(!cars)
               return res.status(404).json({"error":"no data to show"});
               console.log(cars);
               res.status(200).json(cars)
          });          
    });
    router.get("/calculation/:b",(req,res) =>{
      
       let {car,Car_Year,Car_km,Car_Insurance,Car_Owner} = JSON.parse(req.params.b);
       Car.findOne({car})
       .then(car =>{
        let Car_Price=JSON.parse(JSON.stringify(car)).price;
        
        
        if(Car_Year==2015){
        Car_Price-=Car_Price*0.1;
        }
        if(Car_Year==2013){
            Car_Price-=Car_Price*0.12;
        }
        if(Car_Year==2010){
            Car_Price-=Car_Price*0.13;
        }
        if(Car_km==5000){
            Car_Price-=Car_Price*0.04;
        }
        if(Car_km==10000){
            Car_Price-=Car_Price*0.06;
        }
        if(Car_km==20000){
            Car_Price-=Car_Price*0.08;
        }
        if(Car_km==30000){
            Car_Price-=Car_Price*0.9;
        }
        if(Car_Insurance=="no"){
            Car_Price-=Car_Price*0.4;
        }    
        if(Car_Owner==2){
            Car_Price-=Car_Price*0.2;
        }
        return res.json({"price":Car_Price});
       })
      
    })
 

    module.exports = router;
 

