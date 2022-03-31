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
                {
                    media: 'https://source.unsplash.com/random/800x500',     
                    class: 'active'
                },
                {
                    media: 'https://source.unsplash.com/random/800x500/?Shoes',     
                    class: 'disabled'
                },
                {
                    media: 'https://source.unsplash.com/random/800x500/?Fruit',     
                    class: 'disabled'
                },
                {
                    media: 'https://source.unsplash.com/random/800x500/?City',    
                    class: 'disabled'
                },
                {
                    media: 'https://source.unsplash.com/random/800x500/?Beach',     
                    class: 'disabled'
                },
            ],
            //instanzio una variabile per indicare l'indice dell'array immagini che deve essere visualizzato
            index: 0,
        },
        created() {
            this.autorun();
        },
        methods: {
            //creo funzione per mostrare l'immagine corrente, ovvero quella fomraa dall'immagine dell'array con l'index
            currentImg: function(){
                console.log(this.immagini[this.index].media)
                console.log(this.immagini[this.index].class)
                return this.immagini[this.index].media
            },
            //creo funzione che, al click, aggiunge 1 all'index dell'img
            succ: function(){
                if (this.index == (this.immagini.length - 1)) {
                    this.index = 0;
                } else{
                    this.index += 1;
                }  
                this.active();
            },
            //creo funzione che sottrae 1 all'index
            prev: function() {
                if (this.index == 0) {
                    this.index = this.immagini.length - 1;
                } else{
                    this.index -= 1;
                }
                this.active();
            },
            active: function() {
                this.immagini.forEach((element,index) => {
                    return element.class = 'disabled';
                });
                return this.immagini[this.index].class = 'active';
            },
            autorun: function() {
                setInterval(this.succ,3000);
            }
        }   
    }
)