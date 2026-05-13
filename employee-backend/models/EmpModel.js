import { Schema, model } from "mongoose";

const empSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name of employee is required"],
    },
    email: {
      type: String,
      required: [true, "Email of employee is required"],
      unique: true,
    },
    mobile: {
      type: Number,
    },
    designation: {
      type: String,
      required: [true, "Designation of employee is required"],
    },
    companyName: {
      type: String,
      required: [true, "Name of company is required"],
    },
  },
  { strict: "throw", versionKey: false, timestamps: true },
);

//export modekl
export const EmpModel = model("emp", empSchema);