/*
Descrizione
Partendo da un array di immagini, realizziamo uno slider con Vue.js come da mockup
Al click delle freccette "sinistra" e "destra" lo slider cambierà l'immagine visibile 
passando alla successiva oppure alla precedente.
Consigli
Ricordiamoci come visualizzare un singolo elemento alla volta di un array
Attenzione
Quando le immagini terminano, lo slider ricomincerà dalla prima
Bonus
applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente 
( riguardare la documentazione su i lifecycle hooks )
Al click su un pallino verrà visualizzata l'immagine di riferimento associata 
( il terzo pallino sarà associato alla terza immagine e così via..)
*/

var app = new Vue (
    {
        el: '#root',
        data: {
            immagini: [
                'https://source.unsplash.com/random/800x500',
                'https://source.unsplash.com/random/800x500/?Shoes',
                'https://source.unsplash.com/random/800x500/?Fruit',
                'https://source.unsplash.com/random/800x500/?City',
                'https://source.unsplash.com/random/800x500/?Beach'
            ],
            //instanzio una variabile per indicare l'indice dell'array immagini che deve essere visualizzato
            index: 0,
            currentImgIndex: 0,
        },
        methods: {
            //creo funzione per mostrare l'immagine corrente, ovvero quella fomraa dall'immagine dell'array con l'index
            currentImg: function(){
                console.log(this.immagini[this.index])
                return this.immagini[this.index]
            },
            //creo funzione che, al click, aggiunge 1 all'index dell'img
            succ: function(){
                if (this.index == (this.immagini.length - 1)) {
                    this.currentIndex = 0;
                    this.index = 0;
                } else{
                    this.index += 1;
                    this.currentIndex = this.index;
                }    
            },
            //creo funzione che sottrae 1 all'index
            prev: function() {
                if (this.index == 0) {
                    return this.index = this.immagini.length - 1;
                } else{
                    return this.index -= 1;
                }    
            },
        }
    }
)