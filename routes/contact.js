import { Router } from "express";
import { getContacts, getContact, postContacts, patchContact, deleteContact } from "../controllers/contact.js";

// create a router
const contactRouter = Router ();

// Get all contacts
contactRouter.get('/contact', getContacts);

// Get a contact
contactRouter.get('/contact/id', getContact);

// post a Contact
contactRouter.post('/contact', postContacts);

// update a Contact
contactRouter.patch('/contact/id', patchContact);

// delete Contact
contactRouter.delete('/contact/:id', deleteContact);

// export router
export default contactRouter;


