const searchModel = require("../models/search");

class search_controller{

    static async searchJobByTitle(req, res) {
        //try {
            const {title} = req.body;

            var result = await searchModel.search_by_title(
              title
            );
            
          var extractedData = result.map((res) => {
            return {
                JobPostID: res.JobPostID,
                Title: res.Title,
                Description: res.Description,
                StartSalary: res.StartSalary,
                EndSalary:res.EndSalary,
            };
          });
    
    
    
          if (extractedData) {
            res.send(extractedData);
          } else {
          res.send({message: "empty"});
          
        }
      }


      static async searchJobByLocation(req, res) {
        //try {
            const {location} = req.body;

            var result = await searchModel.search_by_location(
              location
            );
            
          var extractedData = result.map((res) => {
            return {
                JobPostID: res.JobPostID,
                Title: res.Title,
                Description: res.Description,
                StartSalary: res.StartSalary,
                EndSalary:res.EndSalary,
                Location: res.Address,
            };
          });
    
    
    
          if (extractedData) {
            res.send(extractedData);
          } else {
          res.send({message: "empty"});
          
        }
      }

      static async searchJobBySalary(req, res) {
        //try {
            const {start,end} = req.body;

            var result = await searchModel.search_by_salary(
              start,
              end
            );
            
            var extractedData = result.map((res) => {
                return {
                  JobPostID: res.JobPostID,
                  Title: res.Title,
                  Description: res.Description,
                  StartSalary: res.StartSalary,
                  EndSalary: res.EndSalary,
                  
                };
              });
              
    
    
    
          if (extractedData) {
            res.send(extractedData);
          } else {
          res.send({message: "empty"});
          
        }
      }






}

module.exports = search_controller