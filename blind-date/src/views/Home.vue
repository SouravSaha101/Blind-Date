<template>
  <div id="home">
    
Welcome Soy
    
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "./../firebase";

export default {
  data() {
    return {
      uid: "",
      isAuthorized: false,
      firebaseData: null,
      userData: {},
      isGoogleUser: false,
      googleLoginData: {
        email: "",
        name: "",
        photoURL: "",
        uid: "",
        phoneno: "",
      },
      count: 0,
    };
  },
  methods: {
    async signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "Home",
          });
        });
    },
  },
created: async function () {
console.log("ff")
}

  // created: async function () {
  //   console.log("4");
  //   this.uid = firebase.auth().currentUser.uid;
  //   const uidRoute = JSON.parse(this.$route.query.uid);

  //   if (uidRoute == this.uid) {
  //     this.isAuthorized =
  //       firebase.auth().currentUser.providerData[0].providerId == "password"
  //         ? true
  //         : false;
  //     this.isGoogleUser =
  //       firebase.auth().currentUser.providerData[0].providerId == "google.com"
  //         ? true
  //         : false;
  //   }

  //   if (this.isGoogleUser) {
  //     this.googleLoginData.photoURL = firebase.auth().currentUser
  //       .providerData[0].photoURL
  //       ? firebase.auth().currentUser.providerData[0].photoURL
  //       : "Not Present";
  //     this.googleLoginData.uid = this.uid;
  //     this.googleLoginData.email = firebase.auth().currentUser.providerData[0].email;
  //     this.googleLoginData.name = firebase.auth().currentUser.providerData[0].displayName;
  //     this.googleLoginData.photoURL = firebase.auth().currentUser
  //       .providerData[0].photoURL
  //       ? firebase.auth().currentUser.providerData[0].photoURL
  //       : "Not Present";
  //     this.googleLoginData.phoneno = firebase.auth().currentUser.providerData[0]
  //       .phoneno
  //       ? firebase.auth().currentUser.providerData[0].phoneno
  //       : "Not Present";
  //   }

  //   const documentPath = "login-details/" + this.uid.toString();
  //   const docRef = db.doc(documentPath);
  //   const data = (await docRef.get()).data();
  //   if (!data) {
  //     docRef.set(this.isGoogleUser ? this.googleLoginData : this.userdata);
  //   } else {
  //     alert("User Logged in before");
  //   }
  //   this.userData = data ? data : {};
  //   db.collection("login-details")
  //     .get()
  //     .then ((querySnapshot) => {
  //       this.count = querySnapshot.docs.length;
  //       querySnapshot.forEach(function (doc) {
  //         // doc.data() is never undefined for query doc snapshots
  //         console.log(doc.id, " => ", doc.data());
  //         // this.count++;
  //       });
  //     });
  // },
};
</script>
