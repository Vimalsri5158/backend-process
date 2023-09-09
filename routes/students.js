
import express from 'express';
import { student as studentModel } from '../db-utils/models.js';

const studentRouter = express.Router();


// GET request method
studentRouter.get('/', async (req, res) => {

    try{
        const students = await studentModel.find({}, {id:1, name: 1, age: 1, dob: 1, gender: 1, _id:0});        
        console.log( students);
        res.send(students);

    }catch(err){
    console.log(err);
    res.status(500).send({msg: "Error occured while fetching user"})
}
});

// POST request method
studentRouter.post('/', async (req, res) => {
    try{
    const student = new studentModel(req.body);
    await student.save();
    res.send({ msg: "Student created successfully" });
}catch(err){
    console.log(err);
    res.status(500).send({msg:'Error creating student'});
}

});

// PUT request method
studentRouter.put('/:studentId', async(req, res) => {
    const { studentId } = req.params;
    try{
        new studentModel (req.body);
        await studentModel.updateOne({id: studentId}, {'$set': req.body});
        res.send({ msg: "Student updated successfully" });
    }catch(err){
        console.log(err);
        res.status(500).send({msg:'Error creating student'});
    }
});

// DELETE request method
studentRouter.delete('/:studentId', async(req, res) => {
    const { studentId } = req.params;
    try{
        await studentModel.deleteOne({id: studentId});
        res.send({ msg: "Student deleted successfully" });
    }catch(err){
        console.log(err);
        res.status(500).send({msg:'Error creating student'});
    }
});

export default studentRouter;
