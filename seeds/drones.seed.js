// Iteration #1

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

require("../db/index");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

Drone.create(drones)
    .then((dronesFromDb)=>{
        console.log(`Created ${dronesFromDb.length} drones!`);
    })
    .catch(()=>{
        console.log(`Sorry, can't create drones due to world chip shortage, lol`)
    });