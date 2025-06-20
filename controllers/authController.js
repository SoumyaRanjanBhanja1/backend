exports.getCurrentUser = (req, res) => {
  if (!req.user) return res.status(401).json({ message: 'Not authenticated' });
  res.json({ email: req.user.email, role: req.user.role });
};

exports.logout = (req, res) => {
  req.logout(() => {
    res.clearCookie('connect.sid');
    res.json({ message: 'Logged out' });
  });
};
