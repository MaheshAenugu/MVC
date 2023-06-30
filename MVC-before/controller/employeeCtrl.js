const Employee = require("../model/Employee");

// Create
const createEmployeeCtrl = async (req, res) => {
  try {
    const employee = await Employee.create({
      name: req.body.name,
      city: req.body.city,
      salary: req.body.salary,
      isMarried: req.body.isMarried,
    });

    res.json({
      status: "success",
      data: employee,
    });
  } catch (err) {
    console.log(err);
  }
};

// get all
const getEmployeesCtrl = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json({ status: "success", data: employees });
  } catch (err) {
    console.log(err);
  }
};

//Update
const updateEmployeeCtrl = async (req, res) => {
  try {
    const updateEmp = await Employee.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        city: req.body.city,
        salary: req.body.salary,
        isMarried: req.body.isMarried,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    res.json({ status: "success", data: updateEmp });
  } catch (err) {
    console.log(err);
  }
};

// Get by Id
const getEmployeeById = async (req, res) => {
  try {
    res.json({ status: "success", data: "fetch Single Employee" });
  } catch (err) {
    console.log(err);
  }
};

// Delete
const deleteEmployeeCtrl = async (req, res) => {
  try {
    const deleteEmp = await Employee.findByIdAndDelete(req.params.id);
    res.json({
      status: "success",
      data: "Employee has been deleted successfully",
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createEmployeeCtrl,
  getEmployeesCtrl,
  updateEmployeeCtrl,
  getEmployeeById,
  deleteEmployeeCtrl,
};
