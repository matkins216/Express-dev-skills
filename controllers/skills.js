const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit: editSkill,
    // update: updateSkill
  
}

function index(req, res, next) {
    const allSkills = Skill.getAll();
    res.render('skills/index.ejs', {
        skills: allSkills
      })
};
function show(req, res){
    // use the id from HTTP request which is stored in (req.params.id)
    // thats the id of the resource our model wants to find

    // so we can use our model and give it the id from the params to find the resource

    const skillsFromDB = Skill.getOne(req.params.id)
    res.render('skills/show', {skill: skillsFromDB})
    }
         
function newSkill(req, res) {
        res.render('skills/new');
      }


function create(req, res) {
        console.log(req.body);
        // The model is responsible for creating data
        Skill.create(req.body);
        // Do a redirect anytime data is changed
        res.redirect('/skills');
      }
      
function deleteSkill(req, res) {
        Skill.deleteOne(req.params.id);
        res.redirect('/skills');
      }

function editSkill (req, res){
  res.render('skills/edit');
  Skill.edit(req.body);
  res.redirect('/skills');
}
// function updateSkill (req, res){
//   Skill.update(req.body);
// }