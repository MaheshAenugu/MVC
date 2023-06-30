const express = require("express");
const {
  createEmployeeCtrl,
  getEmployeesCtrl,
  updateEmployeeCtrl,
  getEmployeeById,
  deleteEmployeeCtrl,
} = require("../controller/employeeCtrl");
const router = express.Router();

// post employees
router.post("/", createEmployeeCtrl);

// get employees
router.get("/", getEmployeesCtrl);

// PUT employees / id
router.put("/:id", updateEmployeeCtrl);

// GET employees / id
router.post("/:id", getEmployeeById);

// DELETE employees / id
router.delete("/:id", deleteEmployeeCtrl);

module.exports = router;
