// src/pages/PostProject.js

import React, { useState } from 'react';
// import axios from 'axios';

const skillsList = [
  'Illustration',
  'Graphic Design',
  'Animation',
  'Web Design',
  'UI/UX Design',
  '3D Modeling',
  // Add more skills as needed
];

const PostAjob = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    deadline: '',
    budget: '',
    skills: [],
  });
  
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSkillChange = (e) => {
    const { options } = e.target;
    const selectedSkills = Array.from(options)
      .filter(option => option.selected)
      .map(option => option.value);
    setFormData((prevData) => ({
      ...prevData,
      skills: selectedSkills,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const projectData = new FormData();
    
    // Append form data
    for (const key in formData) {
      projectData.append(key, formData[key]);
    }
    if (file) {
      projectData.append('file', file);
    }

    try {
      const response = await axios.post('/api/projects', projectData); // Adjust your API endpoint
      console.log('Project Posted:', response.data);
      // Reset the form after submission
      setFormData({
        title: '',
        description: '',
        deadline: '',
        budget: '',
        skills: [],
      });
      setFile(null);
    } catch (error) {
      console.error('Error posting project:', error);
    }
  };

  return (
    <div className="container">
      <h2>Post a Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Project Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Project Description</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="deadline" className="form-label">Deadline</label>
          <input
            type="date"
            className="form-control"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="budget" className="form-label">Budget</label>
          <input
            type="number"
            className="form-control"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="skills" className="form-label">Required Skills</label>
          <select
            multiple
            className="form-control"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleSkillChange}
            required
          >
            {skillsList.map((skill, index) => (
              <option key={index} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="file" className="form-label">Upload Reference Images/Files</label>
          <input
            type="file"
            className="form-control"
            id="file"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Post Project</button>
      </form>
    </div>
  );
};

export default PostAjob;
