const fillProjectSection = function(projects) {
  const projectSection = document.querySelector('.projects');
  for (project of projects) {
    const newProject = document.createElement('div');
    newProject.className = 'project';
    newProject.innerHTML = '<img src="https://rachelpfeiffer.github.io/Portfolio-Project/images/'+project.id+'.jpg" class="proj-pic" width="100%" alt="'+project.name+'"><h1 class="project-name">'+project.name+'</h1><div class="view"><a class="github-link" href="'+project.github+'" target="_blank">GitHub Repo</a><a href="'+project.demo+'" class="demo-link" target="_blank">Live Demo</a>';
    projectSection.appendChild(newProject);
  }
}

fetch("https://rachelpfeiffer.github.io/Portfolio-Project/projects.json").then(function (response) {
return response.json();
}).then(function (response) {
  fillProjectSection(response.projects);
});
