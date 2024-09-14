var isSkillsVisible = true;
function toggleSkills() {
    var skillsSelect = document.getElementById('skills');
    if (skillsSelect) {
        if (isSkillsVisible) {
            skillsSelect.style.display = 'none';
        }
        else {
            skillsSelect.style.display = 'block';
        }
        isSkillsVisible = !isSkillsVisible;
    }
}
