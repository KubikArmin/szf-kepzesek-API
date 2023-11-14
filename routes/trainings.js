app.get("/api/trainings", (req, res) => {
  res.status(200).json({ success: true, msg: "Show all trainings " });
});

app.get("/api/trainings/:id", (req, res) => {
  res.status(200).json({ success: true, msg: `Get training ${req.params.id}` });
});

app.post("/api/trainings", (req, res) => {
  res.status(200).json({ success: true, msg: "Create new training" });
});

app.put("/api/trainings/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update training ${req.params.id}` });
});

app.delete("/api/trainings/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete training ${req.params.id}` });
});
