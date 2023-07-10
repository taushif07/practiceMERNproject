// const fs = require('fs');
// const model = require('../model/user')
// const mongoose = require('mongoose');
// const users = model.User;
// // const fs = require('fs');
// // // const index = fs.readFileSync('index.html', 'utf-8');
// // const path = require('path');
// // const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data.json'), 'utf-8'));
// // const users = data.users;

// // exports.createUser = (req, res) => {
// //   console.log(req.body);
// //   users.push(req.body);
// //   res.status(201).json(req.body);
// // };

// exports.getAllUsers = async(req, res) => {
//   await res.json(users);
// };

// exports.getUser = (req, res) => {
//   const id = +req.params.id;
//   const user = users.find((p) => p.id === id);
//   res.json(user);
// };
// exports.replaceUser = (req, res) => {
//   const id = +req.params.id;
//   const userIndex = users.findIndex((p) => p.id === id);
//   users.splice(userIndex, 1, { ...req.body, id: id });
//   res.status(201).json();
// };
// exports.updateUser = (req, res) => {
//   const id = +req.params.id;
//   const userIndex = users.findIndex((p) => p.id === id);
//   const user = users[userIndex];
//   users.splice(userIndex, 1, { ...user, ...req.body });
//   res.status(201).json();
// };
// exports.deleteUser = (req, res) => {
//   const id = +req.params.id;
//   const userIndex = users.findIndex((p) => p.id === id);
//   const user = users[userIndex];
//   users.splice(userIndex, 1);
//   res.status(201).json(user);
// };
const fs = require('fs');
const model = require('../model/user')
const mongoose = require('mongoose');
const User = model.User;

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.getUser = async (req, res) => {
  const id = req.params.id;
  console.log({id})
  const user = await User.findById(id);
  res.json(user);
};
exports.replaceUser = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await User.findOneAndReplace({_id:id},req.body,{new:true})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await User.findOneAndUpdate({_id:id},req.body,{new:true})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};
exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try{
  const doc = await User.findOneAndDelete({_id:id})
  res.status(201).json(doc);
  }
  catch(err){
    console.log(err);
    res.status(400).json(err);
  }
};
