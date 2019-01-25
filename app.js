"use strict";

var response = 10;
console.log("script is linked and running");
var navList = document.querySelector('ol');
fetch("https://rachelpfeiffer.github.io/Portfolio-Project/projects.json").then(function (info) {
  return info.json();
}).then(function (info) {
  response = info.projects;
  fillProjectSection(info.projects[0]);
  fillNav(info.projects);
});

document.addEventListener('click', function (e) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = response[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      project = _step.value;

      if ('0' + project.id === e.target.innerText || project.name.toUpperCase() === e.target.innerText) {
        (function () {
          var projectSection = document.querySelector('.project');
          projectSection.classList.add('up');
          projectSection.classList.add('transparent');
          // need to set a new variable with the value to fill with, because otherwise the loop will finish before the setTimeout and "project" will be equal to the last project in the loop
          var fillWithThis = project;
          setTimeout(function () {
            projectSection.classList.remove('up');
            projectSection.classList.add('down');
            fillProjectSection(fillWithThis);
          }, 100);
          setTimeout(function () {
            projectSection.classList.remove('transparent');
            projectSection.classList.remove('down');
          }, 200);
        })();
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});

var fillNav = function fillNav(projects) {
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = projects[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      project = _step2.value;

      var projListing = document.createElement('li');
      projListing.innerHTML = '<h1>0' + project.id + '</h1><h4>' + project.name + '</h4>';
      navList.appendChild(projListing);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
};

var fillProjectSection = function fillProjectSection(project) {
  var pic = document.querySelector('.proj-pic');
  pic.src = 'https://rachelpfeiffer.github.io/Portfolio-Project/images/' + project.id + '.JPG';

  var name = document.querySelector('.proj-name');
  name.innerText = project.name;

  var description = document.querySelector('.description');
  description.innerText = project.description;

  var github = document.querySelector('.gitHub');
  github.href = project.github;

  var demo = document.querySelector('.live');
  demo.href = project.demo;

  var projectSection = document.querySelector('.project');
  projectSection.style.backgroundColor = project.color;
};
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
