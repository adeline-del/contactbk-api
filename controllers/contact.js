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
export const getContact = async (req, res) => {
  try {
    const contact = await contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
