document.getElementById('add-proposition').addEventListener('click', () => {
    

    const div = document.createElement('div');
    
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';           
    checkbox.className = 'check-correcte';
    
    
    const inputTexte = document.createElement('input');
    inputTexte.type = 'text';
    inputTexte.placeholder = 'Texte de la proposition';
    inputTexte.className = 'texte-proposition'; 
    inputTexte.required = true;
    
    
    div.appendChild(checkbox);
    div.appendChild(inputTexte);
    
    
    document.getElementById('propositions').appendChild(div);
});
 
  
document.getElementById('form-question').addEventListener('submit', function(e) {
    

    e.preventDefault();
    
    
    const proprietaire = document.getElementById('proprietaire').value;
    const nomExamen = document.getElementById('nom-examen').value;
    const enonce = document.getElementById('enonce').value;
    const duree = parseInt(document.getElementById('duree').value);
    const points = parseInt(document.getElementById('points').value);
    
    
    const propositions = [];
    
    
    document.querySelectorAll('#propositions div').forEach(div => {
        
        const checkbox = div.querySelector('.check-correcte');
        
        const inputTexte = div.querySelector('.texte-proposition');
        
        propositions.push({
            texte: inputTexte.value,
            correcte: checkbox.checked  
        });
    });
    
    
    const cle = 'examens_' + proprietaire;
    const examens = JSON.parse(localStorage.getItem(cle)) || [];
    
    
    const examen = examens.find(ex => ex.nom === nomExamen);
    
    
    if (!examen) {
        alert('Examen non trouvé ! Vérifiez le nom du propriétaire et le nom de l\'examen.');
        return;
    }
    
    
    const nouvelleQuestion = {
        enonce: enonce,
        duree: duree,
        points: points,
        propositions: propositions
    };
    
    examen.questions.push(nouvelleQuestion);
    
    
    localStorage.setItem(cle, JSON.stringify(examens));
    
    
    alert('Question ajoutée avec succès !');
    this.reset();  // Vide le formulaire
    document.getElementById('propositions').innerHTML = '';  // Vide les propositions
});