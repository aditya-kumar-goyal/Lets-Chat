// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZEQ73Pfy4ES1gVWyvZ-Jz327uJnxYfSU",
    authDomain: "lets-chat-web-app-d1afc.firebaseapp.com",
    projectId: "lets-chat-web-app-d1afc",
    storageBucket: "lets-chat-web-app-d1afc.appspot.com",
    messagingSenderId: "825944126545",
    appId: "1:825944126545:web:5ea4cb7ca30a27e4beb470"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function logout()
{
    window.location = ("logout.html");
}