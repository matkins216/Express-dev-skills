const { editSkill } = require("../controllers/skills");

const skills = [
    {id: 12345, skill: 'Front End Design', name: 'Matt'},
    {id: 22356, skill: 'CSS', name: 'Ronnie'},
    {id: 13578, skill: 'Javascript', name: 'Jonnie'}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    edit,
    // update
};


function getAll() {
    return skills;
  };

  function getOne(id) {
    // Use the Array.prototype.find iterator method
    return skills.find(skill => skill.id === parseInt(id));
  };

  function create(skill) {
    // Add the id
    skill.id = Math.floor(1000 + Math.random() * 9000);

    // New todos wouldn't be done :)
    
    skills.push(skill);
  }

  function deleteOne(id) {
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
  }

  function edit(skill){
    skills.push(skill);
  }

  // function update(skill){
  //   skills.push(skill);
  // }