const db = require("../config/db");

class jobApplication{
    id
    jobPostID
    jobSeekerID
    resumePath 
    coverLetter

    static get_jobApplications(id) {
        return new Promise((resolve) => {
          const sql = "SELECT * FROM `job_applications` WHERE `JobPostID` = ? And Stauts='pending'";
          
          
          db.query(sql, [id], (err, result) => {
            if (err) {
              console.error("Error getting Job Applications: ", err);
              resolve(err);
            } else {
              console.log("GG");
              resolve(result);
            }
          });
        });
      }
     

      static update(
        id,status) {
        return new Promise((resolve) => {
          const sql = 'UPDATE job_applications SET Stauts=? WHERE ApplicationJobID = ?';
          const values = [
            status,id];

          db.query(sql, values, (err, result) => {
            if (err) {
              console.error("Error updating jobApplication: ", err);
              resolve(err);
            } else {
              resolve(result);
            }
          });
        });
      }
    }

module.exports = jobApplication