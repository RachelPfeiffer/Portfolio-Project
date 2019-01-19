let response = 10;
console.log("script is linked and running");
const navList = document.querySelector('ol');
fetch("projects.json").then(function (info) {
return info.json();
}).then(function (info) {
  response = info.projects;
  fillProjectSection(info.projects[0]);
  fillNav(info.projects);
});

document.addEventListener('click', function (e) {
  for (project of response) {
  if ('0'+project.id === e.target.innerText || project.name.toUpperCase() === e.target.innerText) {
    const projectSection = document.querySelector('.project');
    projectSection.classList.add('up');
    projectSection.classList.add('transparent');
    // need to set a new variable with the value to fill with, because otherwise the loop will finish before the setTimeout and "project" will be equal to the last project in the loop
    let fillWithThis = project;
    setTimeout(function () {
      projectSection.classList.remove('up');
      projectSection.classList.add('down');
      fillProjectSection(fillWithThis);
    },100)
    setTimeout(function () {
      projectSection.classList.remove('transparent');
      projectSection.classList.remove('down');
    },200)
  }
}
});

const fillNav = function(projects) {
  for (project of projects) {
    const projListing = document.createElement('li');
    projListing.innerHTML = '<h1>0'+project.id+'</h1><h4>'+project.name+'</h4>';
    navList.appendChild(projListing);
  }
}

const fillProjectSection = function(project) {
const pic = document.querySelector('.proj-pic');
pic.src = 'https://rachelpfeiffer.github.io/Portfolio-Project/images/'+project.id+'.JPG';

const name = document.querySelector('.proj-name');
name.innerText = project.name;

const description = document.querySelector('.description');
description.innerText = project.description;

const github = document.querySelector('.gitHub');
github.href = project.github;

const demo = document.querySelector('.live');
demo.href = project.demo;

const projectSection = document.querySelector('.project');
projectSection.style.backgroundColor = project.color;
}
//
//   const infoSpot = document.querySelector('.proj-info-spot');
//
//   const infoDiv = document.querySelector('.proj-info');
//
//   const name = document.querySelector('proj-name');
//       name.innerText = project.name;
//
//
//       const view = document.querySelector('view');
//
//       const gitHub = document.querySelector('.gitHub');
//       gitHub.href = project.github;
//       gitHub.target = '_blank';
//
//       const demo = document.querySelector('live');
//       demo.href = project.demo;
//
//       const describe = document.querySelector('description');
//       describe.innerText = project.description;
// }


// function getKeyByValue(object, value) {
//   return Object.keys(object).find(key => object[key] === value);
// };
// getKeyByValue(response[0],"Cherry Demo");
