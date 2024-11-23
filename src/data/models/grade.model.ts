import mongoose from 'mongoose';

const gradeSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',  
    required: true,
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',  
    required: true,
  },
  grade: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  dateRecorded: {
    type: Date,
    default: Date.now,
  },
});

export const GradeModel = mongoose.model('Grade', gradeSchema);