import mongoose from 'mongoose';

const enrollmentSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',  // Relación con el modelo de Alumno
    required: true,
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject',  // Relación con el modelo de Materia
    required: true,
  },
  enrollmentDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ['enrolled', 'dropped', 'completed'],
    default: 'enrolled',  // El estado inicial de la inscripción es 'enrolled'
  },
});

export const EnrollmentModel = mongoose.model('Enrollment', enrollmentSchema);
