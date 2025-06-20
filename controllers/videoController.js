const Video = require('../models/Video');

exports.getVideos = async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
};

exports.addVideo = async (req, res) => {
  if (req.user?.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
  const video = await Video.create(req.body);
  res.json(video);
};

exports.updateVideo = async (req, res) => {
  if (req.user?.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
  const updated = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteVideo = async (req, res) => {
  if (req.user?.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
  await Video.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
