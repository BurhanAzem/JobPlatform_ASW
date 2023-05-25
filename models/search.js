const db = require("../config/db");

class search{
    email
    id
    title
   
    
      
    
        static search_by_title(title) {
            return new Promise((resolve) => {
                const sql = "SELECT * FROM `job_posts` WHERE `title` LIKE ?;";
                const searchPattern = `%${title}%`;
            
                db.query(sql, [searchPattern], (err, result) => {
                  if (err) {
                    console.error("Error searching by title: ", err);
                    resolve(err);
                  } else {
                    resolve(result);
                  }
                });
              });
      }

      static search_by_location(location) {
        return new Promise((resolve) => {
            const sql = "SELECT jp.*, r.Address FROM job_posts jp JOIN requirements r ON jp.requirementid = r.requirementid WHERE r.address LIKE ?;";

          const searchPattern = `%${location}%`;
          
          db.query(sql, [searchPattern], (err, result) => {
            if (err) {
              console.error("Error searching by location: ", err);
              resolve(err);
            } else {
                console.log("gg");
              resolve(result);
              
            }
          });
        });
      }

      static search_by_salary(start, end) {
        return new Promise((resolve) => {
          const sql = "SELECT * FROM `job_posts` WHERE (`StartSalary` >= ? AND `StartSalary` <= ?) OR (`EndSalary` >= ? AND `EndSalary` <= ?);";
          
          db.query(sql, [start, end, start, end], (err, result) => {
            if (err) {
              console.error("Error searching by salary: ", err);
              resolve(err);
            } else {
              resolve(result);
            }
          });
        });
      }
      
    
    
      


}

module.exports = search