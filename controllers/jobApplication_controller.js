const jobApplicationModel = require("../models/jobApplication");
class jobApplication_controller {
    static async get_Applications(req, res) {
        //try {
            const id  = parseInt(req.params.id);
          var result = await jobApplicationModel.get_jobApplications(id);
    
          var extractedData = result.map((Apps) => {
            return {
                ApplicationID: Apps.ApplicationJobID,
                JobPostID: Apps.JobPostID,
                JobSeekerID:Apps.JobSeekerID,
                ResumePath: Apps.ResumePath,
                CoverLetter:Apps.CoverLetter,
                Status:Apps.Status
            };
          });
    
    
    
          if (extractedData) {
            res.send(extractedData);
          } else {
          res.send({message: "empty"});
        }
      }


      static async update_jobApplication(req, res) {
      
      const { id, status } = req.body;

      var result = await jobApplicationModel.update(
        id,
        status
      );

    if (result) {
        res.send(result);
      } else {
      res.send({message: "empty"});
    }
  }



}
module.exports = jobApplication_controller;
