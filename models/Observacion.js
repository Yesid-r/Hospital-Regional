import mongoose from "mongoose";

const observacionSchema = new mongoose.Schema(

    {


        medicamentos:[
            {
                type:String
            }
        ],
        observaciones:[
            {
                type:String
            }
        ]


    },
    { timestamps: true }
)
export default mongoose.model("Observacion", observacionSchema);
