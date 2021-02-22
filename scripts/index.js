(()=>{

    var firebaseConfig = {
        apiKey: "AIzaSyD4fhbxQpNdc64uJ631OqrfpqqoCoKDhvU",
        authDomain: "emporiumdavao-68ce4.firebaseapp.com",
        projectId: "emporiumdavao-68ce4",
        storageBucket: "emporiumdavao-68ce4.appspot.com",
        messagingSenderId: "611634768650",
        appId: "1:611634768650:web:2411919c5b64947ceea8f3"
    };
      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    $(document).ready(function(){
        $('.parallax').parallax();
        $('.sidenav').sidenav();
        $('.carousel').carousel();
    });
})();