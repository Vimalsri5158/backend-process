import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    id: {
        type: 'string',
        required: true,
    },
    name: {
        type: 'string',
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    dob: {
        type: 'string',
        required: true,
    },
    gender: {
        type: 'string',
        required: true,
    },
    imageUrl: {
        type:'string',
        required: true,
    }
});

const student = mongoose.model('students', studentSchema);

export {
    student
}
