const firebase = require ('firebase');
require ('firebase/firestore')

export class Firebase{
    constructor(){
        this._config = {
            apiKey: "AIzaSyAXwaUJrxIsFdZZKBjK7_D30q-ZlG5TVvg",
            authDomain: "whatssapp-clone-a35d4.firebaseapp.com",
            projectId: "whatssapp-clone-a35d4",
            storageBucket: "whatssapp-clone-a35d4.appspot.com",
            messagingSenderId: "909022850356",
            appId: "1:909022850356:web:c492f2156022f525224961",
            measurementId: "G-GGV2EHD6SP"
          };
        this.init();
    }
    init(){
        if (!this._initialized) {
            firebase.initializeApp(this._config);
                firebase.firestore().settings({
                    timestampsInSnapshots: true
                });
            this._initialized = true;
        }
    }
    static db(){
        return firebase.firestore();
    }
    static hd(){
        return firebase.storage();
    } 
    initAuth(){

        return new Promise((resolve, reject)=>{
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function (result) {
                let token = result.credential.accessToken;
                let user = result.user;
                resolve(user, token);
            }).catch(function (error) {
                reject(error);
            });
        });        
    }
    static db(){
        return firebase.firestore();
    }
    static hd() {
        return firebase.storage();
    }
}
