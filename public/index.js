//event handling


let form = document.getElementById('form')
let petName = document.getElementById("petName")

// console.log(form)


const handleSubmit = (e) =>{
    form.addEventListener('submit', (e) => {
        e.preventDefault()
   let nameVal = document.getElementById('petName').value
   let picUrl = document.getElementById('profilePic').value
    let species = document.querySelector('input[name = "animal"]:checked').value
    let friend = document.getElementById('friendly').checked

    let card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <h3>${nameVal}</h3>
            <img src="${picUrl}" alt="${nameVal}">
            <p>Friendly: ${friend ? 'The friendliest!' : 'Not so friendly :('}</p>
            <p>Species: ${species}</p>
            <button class="remove-button">Remove</button>
        `;

        let cardContainer = document.getElementById('cardContainer');
        cardContainer.appendChild(card);

        form.reset()

        cardContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('remove-button')) {
                let cardToRemove = event.target.closest('.card');
                cardContainer.removeChild(cardToRemove);
            }

            
        });

    // console.log(nameVal, picUrl, species, friend)
    })  
     
} 

handleSubmit()



/*
{pet: nameVal
      picture: picUrl
      species: species  
      friendly: friend }
*/
// console.log(petName)