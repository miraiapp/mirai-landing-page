var firebaseConfig = {
    apiKey: "AIzaSyDS5lWbgJD9dbLaxkKx703Yp8MBrddha-c",
    authDomain: "miraiventas-2d764.firebaseapp.com",
    databaseURL: "https://miraiventas-2d764.firebaseio.com",
    projectId: "miraiventas-2d764",
    storageBucket: "miraiventas-2d764.appspot.com",
    messagingSenderId: "632867658530",
    appId: "1:632867658530:web:2e1e6f2cb3c467420f637b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

var principal = new Vue({
    el: '#principal',
    data: {
        contacto : {
            nombre: '',
            correo: '',
            mensaje: ''
        },
        showForm: true,
        messageValidation: '',
    },
    methods: {
        addInformation: function(){
            if(!this.validateFields()){
                this.messageValidation = 'Debe llenar todos los campos.';
                return;
            }
            db.collection('informacion').add(this.contacto);
            this.showForm = false;
        },
        validateFields: function(){
            if(this.contacto.nombre === ''){
                return false;
            } else if (this.contacto.correo === ''){
                return false;
            } else if (this.contacto.mensaje === ''){
                return false;
            }else{
                return true;
            }
        }

    }
})