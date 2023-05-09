
import Trabajador from "../models/Trabajador.js";


//register trabajador

export const createTrabajador = async(req, res)=>{
    const newTrabajador = new Trabajador(req.body)

    try {
        const savedTrabajador = await newTrabajador.save()
        res.status(200).json({success:true,message:"Successfully created",data:savedTrabajador})
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to create. Try again"})
    }
}

// actualizar trabajador 

export const updateTrabajador = async(req, res) =>{
    const id  = req.params.id
    try{
        const updateTrabajador = await Trabajador.findByIdAndUpdate(id, {$set: req.body}, {new:true})
        res.status(200).json({success:true,message:"Successfully updated",data:updateTrabajador})
    }catch(err){
        res.status(500).json({success:false,message:"Failed to update. Try again"})
    }
}

// eliminar trabajador

export const deleteTrabajador = async (req, res) =>{
    const id = req.params.id

    try {
        await Trabajador.findByIdAndDelete(id)
        res.status(200).json({success:true,message:"Successfully deleted "})    
    } catch (error) {
        res.status(500).json({success:false,message:"Failed to delete. Try again"})
    }
}

// consultar trabajador
export const getTrabajador = async(req, res) =>{
    const id = req.params.id

    try {
        const trabajador = await Trabajador.findById(id)
        res.status(200).json({success:true,message:"Successful search",data:trabajador})

    } catch (error) {
        res.status(404).json({success:false,message:"not found"})

    }
}

// consultar todos los trabajadores

export const findAllTrabajador = async(req, res) =>{
    const id = req.params.id

    try {
        const trabajadores = await Trabajador.find({})
        res.status(200).json({success:true,message:"Successful search",data:trabajadores})

    } catch (error) {
        res.status(404).json({success:false,message:"not found"})

    }
}

