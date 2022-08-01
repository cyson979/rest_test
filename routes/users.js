import express from 'express';
import { v4 as uuidv4 } from 'uuid';



const router = express.Router();

const users = [];

// all routes in here are starting with /users
router.get('/', (req, res) => { 
   
    res.send(users);

 });


 router.post('/', (req, res) => {
   
    
    const user = req.body; 

    const userWithId = ({ ...user, id: uuidv4() });
  
    users.push(userWithId);


    console.log(user.firstName);
    console.log(user.lastName);
    console.log(user.age);
   

    res.send(`User with the username ${user.firstName} added to the database.`);

 });

 router.get('/:id', (req, res) => {
    
    const { id } = req.params;
    
    const foundUser = users.find((user)=> user.id === id);
    
    res.send(foundUser);

 });

 export default router;