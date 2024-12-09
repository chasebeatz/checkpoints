// middleware.js
module.exports = function checkWorkingHours(req, res, next) {
    const currentHour = new Date().getHours();
    const currentDay = new Date().getDay();
  
    // Working hours: Mon (1) to Fri (5) from 9 to 17
    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
      next();
    } else {
      res.status(403).send('The service is only available during working hours (Mon-Fri, 9 AM - 5 PM).');
    }
  };
  