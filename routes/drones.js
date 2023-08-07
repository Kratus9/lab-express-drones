const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js")

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {

    const allDrones = await Drone.find()
    // console.log(allDrones)

    res.render("drones/list.hbs", {
      allDrones
    })
  } catch (error) {
    next(error)
  }
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
const { name, propellers, maxSpeed } = req.body

  try {
    
    const newDrone = await Drone.create({
      name: name,
      propellers: propellers,
      maxSpeed: maxSpeed
    })
    // console.log(newDrone)
    res.redirect("/drones")
  } catch (error) {
    next(error)
  }
});

router.get('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone

  try {
    
    const oneDrone = await Drone.findById(req.params.id)
    // console.log(oneDrone)
    res.render("drones/update-form.hbs", {
      oneDrone
    })
  } catch (error) {
    next(error)
  }
});

router.post('/drones/:id/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const { name, propellers, maxSpeed } = req.body
  try {
    
    const updateDrone = await Drone.findByIdAndUpdate(req.params.id, {
      name: name,
      propellers: propellers,
      maxSpeed: maxSpeed
    })
    res.redirect("/drones")
  } catch (error) {
    next(error)
  }
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
