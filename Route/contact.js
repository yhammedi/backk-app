// require express
const express = require("express");

// require express router
const router = express.Router();

// require schema
const Contact = require("../model/Contact");

// méthode get : read
// path http://localhost:5000/api/contact/test

router.get("/test", (req, res) => {
  res.send("msg: hello world");
});

// méthode post:create
// path http://localhost:5000/api/contact/
// req.body
router.post("/", async (req, res) => {
  try {
    const { names, email, phone } = req.body;
    const newContact = new Contact({
      names,
      email,
      phone,
    });
    await newContact.save();
    return res.status(200).send({ msg: "newwaddedd" }, newContact);
  } catch (error) {
    return res.status(400).send({ msg: "we can t added", error });
  }
});

// méthode get all :read
// path http://localhost:5000/api/contact/gettall

router.get("/getall", async (req, res) => {
  try {
    const contactList = Contact.find();
    return await res.status(200).send({ msg: "this is the list", contactList });
  } catch (error) {
    return await res.status(200).send({ msg: "this is the error", error });
  }
});

// méthode get one (_id)
// path http://loclahost:5000/api/contact/:_id
// req.params

router.get("/:_id",async(req, res) => {
  try {
    const { _id } = req.params;
    const foundContact = await contact.findOne({ _id });
    return res.status(200).send({ msg: "get this id", foundContact });
  } catch (error) {
    return await res.status(200).send({ msg: "this is the error", error });
  }
});





module.exports = router;
