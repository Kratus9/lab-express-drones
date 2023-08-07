// Iteration #1
const mongoose = require("mongoose")


const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

require("../db/index")
const Drone = require("../models/Drone.model")

const insertToDB = async(dron) => {
    try {
        
        await dron.insertMany(drones)
        console.log("Datos añadidos")
        mongoose.connection.close()
    } catch (error) {
        next (error)
    }
}

insertToDB(Drone)

