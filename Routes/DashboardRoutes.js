const express = require("express");
const router = express.Router();
const usermodel = require("../Models/DashboardSchema");


router.get("/Dashboardget", (req, res) => {
    usermodel
      .find({})
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });

router.post("/DashboardPost", (req, res) => {
  usermodel
    .create(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});


router.delete("/DashboardDelete/:id",(req,res)=>{
    const id = req.params.id
    usermodel.findByIdAndDelete({_id:id}).then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    });
})

router.get("/DashboardGetFavorites/:id",(req,res)=>{
    const id  = req.params.id
    usermodel.findById({_id:id}).then((result) => {
         res.json(result)
    }).catch((err) => {
         res.json(err)
    });
})


module.exports = router;
