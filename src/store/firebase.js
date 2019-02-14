const CONFIG = {
  apiKey: 'AIzaSyBoRh8iE6Piv7kCnm__4ohKTppOuYyO-dM',
  authDomain: 'cine-list-229210.firebaseapp.com',
  databaseURL: 'https://cine-list-229210.firebaseio.com',
  projectId: 'cine-list-229210',
  storageBucket: 'cine-list-229210.appspot.com',
  messagingSenderId: '999090360120'
}

firebase.initializeApp(CONFIG)


const REF = {
  'SLIDES': firebase.database().ref('SLIDES'),
  'SEARCHED': firebase.database().ref('SEARCHED')
}




export default REF