import mongoose from "mongoose";

const citaSchema = new mongoose.Schema(

    {
        paciente:{
            type: mongoose.Types.ObjectId,
            ref: "Paciente",
            required: true
        },
        trabajadores:[
            {
                type: mongoose.Types.ObjectId,
                ref: "Trabajador",
                required: true
            },
        ],
        especialidad:{
            type: String,
            required: true
        },
        observacion:{
            type: mongoose.Types.ObjectId,
            ref: "Observacion",

        },
        


    },
    { timestamps: true }
)
export default mongoose.model("Cita", citaSchema);
