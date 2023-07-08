const fs = require("fs");

const jsonData = JSON.parse(fs.readFileSync("data.json","utf-8"));
const usersData = jsonData.users;


//CRUD operations :- 
exports.createUser = (req,res) => {
    const newUser = req.body;
    usersData.push(newUser);
    res.status(201).json(newUser);
};

exports.getAllUsers = (req,res) => {
    res.json(usersData);
};

exports.getUser = (req,res) => {
    const id = +req.params.id;
    const user = usersData.find(p => p.id===id);
    res.json(user);
};

exports.replaceUser = (req,res) => {
    const id = +req.params.id;
    const userIndex = usersData.findIndex(p => p.id === id);
    const replacedUserData = usersData.splice(userIndex,1,{...req.body, id:id});
    res.status(201).json(replacedUserData);
};

exports.updateUser = (req,res) => {
    const id = +req.params.id;
    const userIndex = usersData.findIndex(p => p.id === id);
    const user = usersData[userIndex];

    const newupdataedUserData = usersData.splice(userIndex,1,{...user,...req.body});

    res.status(201).json(newupdataedUserData);
};

exports.deleteUser = (req,res) => {
    const id = +req.params.id;
    const userIndex = usersData.findIndex(p => p.id === id);
    const user = usersData[userIndex];

    const deletedProductData = usersData.splice(userIndex,1);

    res.status(201).json(deletedProductData);
}