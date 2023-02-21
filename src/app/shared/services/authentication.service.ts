import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
  ) {}
  // Sign up with email/password
  SignUp(email: string, password: string) {
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
  }
  // Sign in with email/password
  SignIn(email: string, password: string) {
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
}
