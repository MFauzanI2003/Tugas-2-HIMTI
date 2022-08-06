const express =  require("express");
const router = express.Router(); 
const himtiControllers = require("../controllers/himtiControllers");

//read https://tugas-himti.herokuapp.com/api/himti
router.get("/himti", himtiControllers.getHimtis);

//create https://tugas-himti.herokuapp.com/api/himti
router.post("/himti", himtiControllers.createHimtis);

//search https://tugas-himti.herokuapp.com/api/himti/search
router.get("/himti/search", himtiControllers.searchHimtis);

//update https://tugas-himti.herokuapp.com/api/himti/(angka id)
router.put("/himti/:himtiId", himtiControllers.updateHimtis);

//delete https://tugas-himti.herokuapp.com/api/himti/(angka id)
router.delete("/himti/:himtiId", himtiControllers.deleteHimtis);

//restore https://tugas-himti.herokuapp.com/api/himti/(angka id)
router.patch("/himti/:himtiId", himtiControllers.restoreHimtis);

//filter https://tugas-himti.herokuapp.com/api/himti/filter?name=(nama dalam database)
router.get('/himti/filter', himtiControllers.filterHimtis);


module.exports = router;