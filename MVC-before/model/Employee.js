// const mongoose = require("mongoose");

// const employeeSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   city: {
//     type: String,
//     required: true,
//   },
//   isMarried: {
//     type: Boolean,
//     required: false,
//   },
//   salary: {
//     type: Number,
//     required: true,
//   },
//   //   timestamps: true,
// });

// const Employee = mongoose.model("Employee", employeeSchema);

// module.exports = Employee;

const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    isMarried: {
      type: Boolean,
      required: false,
    },
    salary: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
