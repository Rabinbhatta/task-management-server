import Task from "../models/tasks.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, image, assignedTo, assignedBy, status } =
      req.body;
    const newTask = new Task({
      title,
      description,
      image,
      assignedTo,
      assignedBy,
      status,
    });
    await newTask.save();
    return res.status(201).json(newTask);
  } catch (error) {
    return res.status(409).json({ message: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json(tasks);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image, assignedTo, assignedBy, status } =
      req.body;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No task with id: ${id}`);
    const updatedTask = {
      title,
      description,
      image,
      assignedTo,
      assignedBy,
      status,
      _id: id,
    };
    await Task.findByIdAndUpdate(id, updatedTask, { new: true });
    return res.json(updatedTask);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send(`No task with id: ${id}`);
    await Task.findByIdAndRemove(id);
    return res.json({ message: "Task deleted successfully." });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
