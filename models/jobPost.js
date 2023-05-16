const db = require("../config/db");

class jobPost{
    JobPostID 
    EmployerID
    RequirementID
    Title
    Description
    StartSalary
    EndSalary
    Stauts

    static create_jobPost(
        Name,
        Address,
        Major,
        Age,
        NumberExperienceYears, 
        Email, 
        PasswordSlot, 
        PasswordHashed
      ) {
        return new Promise((resolve) => {
          const sql = "INSERT INTO job_posts (Name, Address, Major, Age, NumberExperienceYears, Email, PasswordSlot, PasswordHashed) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
          const values = 
          [ 
            Name,
            Address,
            Major,
            Age,
            NumberExperienceYears, 
            Email, 
            PasswordSlot, 
            PasswordHashed];
          
          db.query(sql, values, (err, result) => {
            if (err) {
              console.error("Error registering jobSeekers: ", err);
              resolve(err);
            } else {
              resolve(result);
            }
          });
        });
      }
    
      static get_jobPost(jobPostID) {
        return new Promise((resolve) => {
          const sql = "SELECT * FROM `job_posts` WHERE `JobSeekerID` = ?";
          //const values = [employerId];
          
          db.query(sql, [jobPostID], (err, result) => {
            if (err) {
              console.error("Error get_jobPosts: ", err);
              resolve(err);
            } else {
              resolve(result);
            }
          });
        });
      }
    
    
        static get_jobPost_by_email(email) {
        return new Promise((resolve) => {
          const sql = "SELECT * FROM `job_posts` WHERE `Email` = ?";
          //const values = [employerId];
          
          db.query(sql, [email], (err, result) => {
            if (err) {
              console.error("Error get_jobPosts : ", err);
              resolve(err);
            } else {
              resolve(result);
            }
          });
        });
      }
    
    
      static get_all() {
        return new Promise((resolve) => {
          const sql = "SELECT * FROM `job_seekers` ";
          //const values = [employerId];
          
          db.query(sql, [], (err, result) => {
            if (err) {
              console.error("Error jobPosts: ", err);
              resolve(err);
            } else {
              resolve(result);
            }
          });
        });
      }
    
    
      static delete_jobPost(jobPostID) {
        return new Promise((resolve) => {
          const sql = "DELETE FROM `job_posts` WHERE `JobSeekerID` = ?";
          //const values = [employerId];
          
          db.query(sql, [jobPostID], (err, result) => {
            if (err) {
              console.error("Error delete_jobPosts: ", err);
              resolve(err);
            } else {
              resolve(result);
            }
          });
        });
      }
}


module.exports = jobPost;