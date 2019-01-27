// let response = 10;
console.log("script is linked and running");
function loadJSON(callback) {
  // using an XMLHttpRequest because fetch isn't yet supported on my siblings' browsers
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/jsonp");
  xobj.open('GET', 'projects.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(JSON.parse(xobj.responseText));
    }
  };
  xobj.send(null);
}

const projectSection = document.querySelector('.project');
const onScreenProj = document.querySelector('.proj-name');
loadJSON(function(json) {
  fillNav(json.projects); // this will log out the json object
  fillProjectSection(json.projects[0]);
  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('proj')) {
      for (var i = 0; i < json.projects.length; i++) {
        // go through all the projects and find the one with a matching name or number
        // edge doesn't read the innertext as uppercase, so I need to switch to upper
        if ((e.target.innerText.toUpperCase() === json.projects[i].name.toUpperCase() || e.target.innerText === '0' + json.projects[i].id)
        // but if it's already on-screen don't do anything
        && json.projects[i].name.toUpperCase() !== onScreenProj.innerText){
          // needs its own variable so the response won't be empty by the time the loop finishes
          const fillWithThis = json.projects[i];
              projectSection.classList.add('up');
              projectSection.classList.add('transparent');
              setTimeout(function () {
                projectSection.classList.remove('up');
                projectSection.classList.add('down');
                fillProjectSection(fillWithThis);
              },100)
              setTimeout(function () {
                projectSection.classList.remove('transparent');
                projectSection.classList.remove('down');
              },200)
          //   }
        }
      };
    };
  });
});



const navList = document.querySelector('ol');
const fillNav = function(projects) {
  // using a for loop so this thing will work in safari and FF!
  for (var i = 0; i < projects.length; i++) {
    const projListing = document.createElement('li');
    projListing.innerHTML = '<h1 class="proj">0'+projects[i].id+'</h1><h4 class="proj">'+projects[i].name+'</h4>';
    navList.appendChild(projListing);
  }
}
//
const fillProjectSection = function (project) {

  const pic = document.querySelector('.proj-pic');
  pic.src = 'images/'+project.id+'.JPG';

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

//     // need to set a new variable with the value to fill with, because otherwise the loop will finish before the setTimeout and "project" will be equal to the last project in the loop
//     // let fillWithThis = project;

// }
// });
