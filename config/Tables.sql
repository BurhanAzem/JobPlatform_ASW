-- Create table "employers"
CREATE TABLE employers (
  EmployerID INT PRIMARY KEY,
  Name VARCHAR(255),
  Address VARCHAR(255),
  Email VARCHAR(255),
  PasswordSlot VARCHAR(255),
  PasswordHashed VARCHAR(255)
);

-- Create table "requirements"
CREATE TABLE requirements (
  RequirementID INT PRIMARY KEY,
  Age INT,
  Major VARCHAR(255),
  NumberExperienceYears INT,
  Address VARCHAR(255)
);

-- Create table "job_seekers"
CREATE TABLE job_seekers (
  JobSeekerID INT PRIMARY KEY,
  Name VARCHAR(255),
  Address VARCHAR(255),
  Major VARCHAR(255),
  Age INT,
  NumberExperienceYears INT,
  Email VARCHAR(255),
  PasswordSlot VARCHAR(255),
  PasswordHashed VARCHAR(255)
);

-- Create table "search_history"
CREATE TABLE search_history (
  SearchHistoryID INT PRIMARY KEY,
  JobSeekerID INT,
  SearchContext VARCHAR(255),
  SearchedDate DATE,
  ExpirationDate DATE,
  FOREIGN KEY (JobSeekerID) REFERENCES job_seekers(JobSeekerID)
);

-- Create table "job_posts"
CREATE TABLE job_posts (
  JobPostID INT PRIMARY KEY,
  EmployerID INT,
  RequirementID INT,
  Title VARCHAR(255),
  Description TEXT,
  StartSalary DECIMAL(10,2),
  EndSalary DECIMAL(10,2),
  FOREIGN KEY (EmployerID) REFERENCES employers(EmployerID),
  FOREIGN KEY (RequirementID) REFERENCES requirements(RequirementID)
);

-- Create table "job_applications"
CREATE TABLE job_applications (
  ApplicationJobID INT PRIMARY KEY,
  JobPostID INT,
  JobSeekerID INT,
  ResumePath VARCHAR(255),
  CoverLetter TEXT,
  FOREIGN KEY (JobPostID) REFERENCES job_posts(JobPostID),
  FOREIGN KEY (JobSeekerID) REFERENCES job_seekers(JobSeekerID)
);
