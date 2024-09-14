let isSkillsVisible : boolean = true

function toggleSkills():void{
    const skillsSelect = document.getElementById('skills')
    if(skillsSelect){
        if(isSkillsVisible){
            skillsSelect.style.display = 'none'
        }
        else{
            skillsSelect.style.display = 'block'
        }
        isSkillsVisible = !isSkillsVisible
}}

