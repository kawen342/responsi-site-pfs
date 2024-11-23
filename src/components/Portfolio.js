import React from 'react';

// Impor gambar dari folder lokal
import Project1Image from '../assets/img/Screenshot (1).png';
import Project2Image from '../assets/img/Screenshot 2024-10-24 173057.png';
import Project3Image from '../assets/img/Screenshot 2024-10-23 215017.png';

function Portfolio() {
  // Daftar proyek statis dengan gambar lokal
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Mendisain UI/UX',
      imagePath: Project1Image,
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'membuat website humbergerr',
      imagePath: Project2Image,
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'membuat website rumah minimalis',
      imagePath: Project3Image,
    },
  ];

  return (
    <div className="portfolio-container">
      <h2 className="text-center mb-4">Portfolio</h2>
      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4" key={project.id}>
            <div className="card mb-4">
              <img
                src={project.imagePath}
                alt={project.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
