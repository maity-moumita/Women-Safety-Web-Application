import { Schema, model, models } from "mongoose";

const emergencyContactSchema = new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    name: {
        type:String,
        required: [true,"Contact Name is required"],
    },
    phone: {
        type: String,
        required: [true, "Contact's phone number is required"],
        match: [/^\+?[0-9]{10,15}$/, "Invalid phone number"],
    },
    relation: {
        type:String,
        required: [true,"Relation is required"],
    },
    isPrimary: {
        type: Boolean,
        default: false,
    },  
});

const EmergencyContact = models.EmergencyContact || model("EmergencyContact",emergencyContactSchema);

export default EmergencyContact;