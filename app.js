console.log("script is linked and running");
const navList = document.querySelector('ol');

const fillNav = function(projects) {
  for (project of projects) {
    const projListing = document.createElement('li');
    projListing.innerHTML = '<h1>0'+project.id+'</h1><h4>'+project.name+'</h4>';
    navList.appendChild(projListing);
  }

}

const fillProjectSection = function(project) {
  console.log(project);
//   const main = document.querySelector('main');
//   const projSection = document.createElement('div');
const pic = document.querySelector('.proj-pic');
pic.src = '/images/'+project.id+'.JPG';

const name = document.querySelector('.proj-name');
name.innerText = project.name;

const description = document.querySelector('.description');
description.innerText = project.description;

const github = document.querySelector('.gitHub');
github.href = project.github;

const demo = document.querySelector('.live');
demo.href = project.demo;
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

let response;
fetch("projects.json").then(function (info) {
return info.json();
}).then(function (info) {
  fillProjectSection(info.projects[1]);
  fillNav(info.projects);
});
