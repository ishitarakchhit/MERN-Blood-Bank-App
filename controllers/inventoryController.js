const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

// CREATE INVENTORY
const createInventoryController = async (req, res) => {
  try {
    const { email, inventoryType } = req.body;
    //validation
    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User Not Found");
    }
    if (inventoryType === "in" && user.role !== "donar") {
      throw new Error("Not a donar account");
    }
    if (inventoryType === "out" && user.role !== "hospital") {
      throw new Error("Not a hospital");
    }
    //save record
    const inventory = new inventoryModel(req.body);
    await inventory.save();
    return res.status(201).send({
      success: true,
      message: "New Blood Reocrd Added",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Errro In Create Inventory API",
      error,
    });
  }
};

// GET ALL BLOOD RECORS
const getSlotController = async (req, res) => {
  try {
    const { status } = req.query; // Use req.query for GET parameters

    // Validate the status
    const validStatuses = ["pending", "approved", "declined", "cancelled"];
    if (!validStatuses.includes(status)) {
      return res.status(400).send({
        success: false,
        message: "Invalid status provided",
      });
    }

    const slots = await slotModel.find({ status }).sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      message: "Get all slots successfully",
      slots,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in getting slots",
      error,
    });
  }
};

module.exports = { createInventoryController, getInventoryController };
