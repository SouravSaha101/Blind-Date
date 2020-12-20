<template>
  <div class="about">
    <header class="masthead about-image">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in" style="background: rgb(33, 37, 41)">
            Welcome
          </div>
          <div class="intro-heading text-uppercase" style="background: #6c5ce7">
            {{ userData.name }}
          </div>
        </div>
      </div>
    </header>
  </div>
</template>
<script >
import { Component, Vue } from "vue-property-decorator";
import firebase from "firebase";
import { db } from "./../firebase";

// const documentPath = "login-details/5xyckXTNdibafaNWAkVUkJgj5sq2";
export default {
  data() {
    return {
      Name: "",
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
  created: async function () {
    let opdata = localStorage.getItem("isloggedOn");
    console.log("About" + opdata);
    // this.Name = data.name;
    this.uid = firebase.auth().currentUser.uid;
    let documentPath = "login-details/" + this.uid.toString();
    const docRef = db.doc(documentPath);
    let data = (await docRef.get()).data();
    this.userData = data ? data : {};
  },

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

  //   let documentPath = "login-details/" + this.uid.toString();
  //   const docRef = db.doc(documentPath);
  //   let data = (await docRef.get()).data();
  //   if (!data) {
  //     docRef.set(this.isGoogleUser ? this.googleLoginData : this.userdata);
  //   } else {
  //     alert("User Logged in before");
  //   }
  //   this.userData = data ? data : {};
  //   let count = 0;
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