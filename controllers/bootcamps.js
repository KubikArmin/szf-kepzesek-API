const Training = require("../models/Training");
// @desc   Get all trainings
// @route  GET /api/trainings
// @access Public
// exports.getTrainings = (req, res, next) => {
//   res
//     .status(200)
//     .json({ success: true, msg: "Show all trainings", hello: req.hello });
// }; // @desc   Get single training
// // @route  GET /api/trainings/:id
// // @access Public
// exports.getTraining = (req, res, next) => {
//   res.status(200).json({ success: true, msg: `Get training ${req.params.id}` });
// }; // @desc   Create new training
// @route  POST /api/trainings
// @access Private
// exports.createTraining = (req, res, next) => {
//   console.log(req.body);
//   res.status(200).json({ success: true, msg: "Create new training" });
// }; // @desc   Update training
// @route  PUT /api/trainings/:id
// @access Private
// exports.updateTraining = (req, res, next) => {
  
//   res
//     .status(200)
//     .json({ success: true, msg: `Update training ${req.params.id}` });
// }; // @desc   Delete training
// @route  DELETE /api/trainings/:id
// @access Private
// exports.deleteTraining = (req, res, next) => {
//   res
//     .status(200)
//     .json({ success: true, msg: `Delete training ${req.params.id}` });
// };
// @desc   Get all trainings
// @route  GET /api/trainings
// @access Public
// exports.getTrainings = (req, res, next) => {
//   res
//     .status(200)
//     .json({ success: true, msg: "Show all trainings", hello: req.hello });
// };

exports.createTraining = async (req, res, next) => {
  try {
    const training = await Training.create(req.body);
    res.status(201).json({ success: true, data: training });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.getTrainings = async (req, res, next) => {
  try {
    const trainings = await Training.find();
    res
      .status(200)
      .json({ success: true, count: trainings.length, data: trainings });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.getTraining = async (req, res, next) => {
  try {
    const training = await Training.findById(req.params.id);
    if (!training) {
      return res.status(400).json({ success: false, msg: "Not found" });
    }
    res.status(200).json({ success: true, data: training });
  } catch (error) {
    next(error)
  }
};

exports.updateTraining = async (req, res, next) => {
  try {
    const training = await Training.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // A frissített adatokat kapjuk vissza
      runValidators: true, // Ellenőrizze a frissített adatokat a modell
    });
    if (!training) {
      return res.status(400).json({ success: false, msg: "Not found" });
    }
    res.status(200).json({ success: true, data: training });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

exports.deleteTraining = async (req, res, next) => {
  try {
    const training = await Training.findByIdAndDelete(req.params.id);
    if (!training) {
      return res.status(400).json({ success: false, msg: "Not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
