import { model, Schema,  } from "mongoose";

const contactSchema = new Schema({
    title: { type: String },
    name: { type: String, required: true},
    number: { type: Number, required: true },
    email: { type: String },
    address: { type: String, required:true },
    birthday: { type: Date },
    company: { type: String },
    jobTitle: {type: String},
    notes: { type:String }
}, {Timestamp: true });

// contactSchema.plugin(toJSON);

export const ContactModel = model('Contact', contactSchema);

// export default Contact;