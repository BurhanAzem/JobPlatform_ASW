const db = require("../config/db");

class employer{
    id
    employerName 
    address 
    email 
    passwordSlot 
    passwordHashed 

    static get_all_trainee(tmp , filename){
        return new Promise((resolve) => {
          db.query(
            "SELECT * FROM `trainee` WHERE `trainee_id` = ? and `some` = ? ",[tmp,filename],
            (err, result) => {
              if (!err) {
                resolve(result);
              }
              
              resolve(err);
            }
          );
        });
      }
    
}


module.exports = employer