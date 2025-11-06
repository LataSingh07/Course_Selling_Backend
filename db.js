const mongoose = require("mongoose");
const { Schema, Types } = mongoose;

console.log("Connecting to MongoDB...");

const userSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
});

const adminSchema = new Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
});

const courseSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageLink: { type: String },
  createdId: { type: Types.ObjectId, ref: "Admin", required: true },
});

const purchaseSchema = new Schema({
  userId: { type: Types.ObjectId, ref: "User", required: true },
  courseId: { type: Types.ObjectId, ref: "Course", required: true },
});

const UserModel = mongoose.model("User", userSchema);
const AdminModel = mongoose.model("Admin", adminSchema);
const CourseModel = mongoose.model("Course", courseSchema);
const PurchaseModel = mongoose.model("Purchase", purchaseSchema);


module.exports = {
  UserModel,
  AdminModel,
  CourseModel,
  PurchaseModel,
};
