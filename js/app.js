

baguetteBox.run('.gallery-pics');


function search_animal() {
    console.log('appjs works')
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('pics');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].getAttribute('data-caption').toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}






