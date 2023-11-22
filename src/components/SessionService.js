import "firebase/compat/database";
import "firebase/compat/auth";

import firebaseApp from '../firebase/firebase'

// Initialize Realtime Database and get a reference to the service
const database = firebaseApp.database();

// Store user login status
export const setLoginStatusToFirebase = (isAuthenticated) => {
  getCurrentUserId()
    .then((userId) => {
      if (userId) {
        // Stores the login status using the userID of the user
        console.log(userId)
        return database.ref(`users/${userId}/isAuthenticated`).set(isAuthenticated);
      } else {
        console.log('Not found for current user userID');
      }
    })
    .then(() => {
      console.log('Log status update to firebase');
    })
    .catch((error) => {
      console.error('Error storing login status.', error);
    });
};


// Get user login status
export const getLoginStatusFromFirebase = () => {
  return getCurrentUserId()
    .then((userId) => {
      if (userId) {
        // Set userID path
        const path = `users/${userId}/isAuthenticated`;
        // Get isAuthenticated from firebase
        return database.ref(path).once('value')
          .then((snapshot) => {
            const isAuthenticated = snapshot.val();
            return isAuthenticated;
          })
          .catch((error) => {
            console.error('Get isAuthenticated from firebase fail:', error);
            return false; // 
          });
      } else {
      
        return false;
      }
    })
    .catch((error) => {
      console.error('Error getting user ID from Firebase:', error);
      return false;
    });
  }

// Get the userID of the currently logged in user
export const getCurrentUserId = () => {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        resolve(user.uid);
      } else {
        // the user is not logged inv
        resolve(null);
      }
    });
  });
};