import mongoose from "mongoose";
import { ContactModel } from "../models/contact.js"; 

// Get all contacts
export const getContacts = async (req, res,next) => {
  try {
  const allContacts = await ContactModel.find();
  res.send(allContacts);
  // res.json(allContacts);
  } catch (error) {
     res.status(200).json(allContacts);
  }
};

// Get a contact
export const getContact = (req, res) => {
  res.json(`Contact with id ${req.params.id} received`);
};

// Patch a contact
export const patchContact = async (req, res, next) => {
try {
const getContact = await ContactModel.findByIdAndUpdate(req.params.id);
{
  res.status(200).json(updateContact);
}  
} catch (error) {
  next(error)
}}

// post Contact

export const postContacts = async (req, res, next) => {
  try {
    // Add Contact to database
    const allContact = await ContactModel.create(req.body);
    // return response
    res.json(allContact);
  } catch (error) {
    next(error);
  }
};

// Delete a contact by ID
export const deleteContact = async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).send('Contact not found');
    }
    res.send(deletedContact);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


// Export DB
export const dbConnection = async () => {

  // DB error handling
try {
  await mongoose.connect(mongo_uri);
  console.log("Database connected Sucessfully");
} catch (error) {
  console.log(error);
}
}