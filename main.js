// CATTURA CONTENITORE DELLE CARD
let cardsWrapper = documents.querySelector('#cardsWrapper');

const RUBRICA = {
    
    contacts : [
        
        {nome : 'Valerio', numero : 1111111111},
        {nome : 'Vittorio', numero : 3333333333},
        {nome : 'Alessio', numero : 2222222222},
        
    ],
    // METODO MOSTRA CONTATTI
    showContacts : function(){
        this.contacts.forEach((contact)=>{

            let div = document.createElement('div');
            
            div.classList.add('col-12','col-lg-8','my-3');

            div.innerHTML = `

                <div class="card-custom">
                    <p class="m-0">${contact.nome}</p>
                    <p class="m-0">${contact.numero}</p>
                    <i class="fa-solid fa-dumpster fa-2x trashIcon"></i>
                </div>
            `;

            cardsWrapper.appenChild(div);
            
        })
    }
}
RUBRICA.showContacts();