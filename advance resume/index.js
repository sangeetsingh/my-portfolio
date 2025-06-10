const skillData = {
  "Salesforce": {
    level: "Advanced",
    details: [
      "3 years experience",
      "Salesforce Admin & AI Associate certified",
      "Profile validation, batch jobs, Omniscript"
    ]
  },
  "LWC": {
    level: "Beginner",
    details: [
      "Learning Lightning Web Components",
      "Building simple UI components"
    ]
  },
  "JavaScript": {
    level: "Intermediate",
    details: [
      "DOM manipulation",
      "Event handling",
      "Async programming"
    ]
  },
  "HTMLCSS": {
    level: "Intermediate",
    details: [
      "Semantic HTML",
      "Responsive layouts",
      "CSS Flexbox & Grid"
    ]
  },
  "QA": {
    level: "Advanced",
    details: [
      "UI, ADA, Functional testing",
      "Defect analysis"
    ]
  },
  "JIRA": {
    level: "Intermediate",
    details: [
      "JIRA for project management",
      "Omniscript development"
    ]
  },
  "Responsive": {
    level: "Intermediate",
    details: [
      "Media queries",
      "Mobile-first design"
    ]
  }
};

const skills = document.querySelectorAll('.skills li');
const modal = document.getElementById('skillModal');
const closeModal = document.querySelector('.close');
const modalSkillName = document.getElementById('modalSkillName');
const modalSkillLevel = document.getElementById('modalSkillLevel');
const modalSkillDetails = document.getElementById('modalSkillDetails');

skills.forEach(skill => {
  skill.addEventListener('click', () => {
    const key = skill.getAttribute('data-skill');
    const data = skillData[key];
    modalSkillName.textContent = skill.textContent;
    modalSkillLevel.textContent = `Proficiency: ${data.level}`;
    modalSkillDetails.innerHTML = data.details.map(d => `<li>${d}</li>`).join('');
    modal.style.display = 'block';
  });
});

closeModal.onclick = function() {
  modal.style.display = 'none';
};
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

