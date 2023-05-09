import mongoose from "mongoose";

const trabajadorSchema = new mongoose.Schema(

    {
        cedula: {
            type: String,
            required: true,
            unique: true,
        },
        num_licencia: {
            type: String,
            required: true,
            unique: true,
        },
        nombre: {
            type: String,
            required: true,
        },
        apellido: {
            type: String,
            required: true,
        },
        fecha_nacimiento: {
            type: Date,
            required: true,
        },
        especialidad: {
            type: String,
            required: true,
        },
        tipo_trabajador: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
)
export default mongoose.model("Trabajador", trabajadorSchema);
