import mongoose from "mongoose";

const pacienteSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
            unique: true,
        },
        cedula: {
            type: String,
            required: true,
            unique: true,
        },
        fecha_nacimiento: {
            type: Date,
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("Paciente", pacienteSchema);
