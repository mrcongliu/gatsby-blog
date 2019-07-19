---
title: 'Firebase Introduction'
date: '2019-07-17'
description: 'ZTM React Course'
---

> Before we start to learn Firebase, we must remember that no developers should keep all the knowledge of it inside their brains. All we need to have is the ability to read the documentations online and follow the steps. 

Useful links:

1. [google firebase](https://firebase.google.com/)
2. [npm firebase](https://www.npmjs.com/package/firebase) 

------

## What is Firebase?

Firebase is a mobile and web application development platform developed by Firebase, Inc. in 2011, then acquired by Google in 2014. As of October 2018, the Firebase platform has 18 products, which are used by 1.5 million apps. [[wikipedia](https://en.wikipedia.org/wiki/Firebase)]

In short Firebase is platform which allow to build web and mobile applications without server side programming language. You can store users data on its real-time database which sync data among users data in no time.

## How to use Firebase?

1. Go to firebase console, create a new project.

2. Go to dashboard, click Project Overview, hit web. Then you get a firebaseConfig object.

3. Go to CLI, install firebase to your repository.

4. Go to your local repo, create a js file, import firebase library inside it.

   * [Add Firebase to your JavaScript project](https://firebase.google.com/docs/web/setup)

5. Integrate Google Sign-In by using the Firebase SDK(“Software Development Kit”) to carry out the sign-in flow.

   * [Authenticate Using Google Sign-In with JavaScript](https://firebase.google.com/docs/auth/web/google-signin)

6. Import signInWithGoogle from that firebase file you created into your sign-in page or whatever page you want sign-in-with-google function. Then you can add a "onClick={ signInWithGoogle }" to any button that is expected to be a button that users can use their google account to sign in.

7. By entering Authentication interface, you can check the users who have signed into your app.

8. Now you need to know how to check users inside your app.

   ​	For example, if you want to store users' status into your app.js file. You need to import auth from firebase, set a state to store the users' status, add a componentDidMount hook to accept users' information and evoke auth.onAuthStateChanged() method to update the state of user.

   * [get the current state of a user](https://firebase.google.com/docs/auth/web/manage-users)

9. Set up Firestore

   ​	We can use test mode first, allow all read and write rules. 
   ​	It's a non-sequel database.

10. How to store users' data in our database.

    ​	We first need "uid", which is a dynamically generated id for each user.

11. QueryReference & QuerySnapshot

    ​	A query is a request we make to firestore to give us something from the databse.

    ​	Firestore returns us two types of objects: references and snapshots. Of these objects, they can be either Document or Collection versions.

    ​	Firestore will always return us these objects, even if nothing exists at from that query.

12. QueryReference

    ​	A queryReference object is an object that represents the "current" place in the database that we are querying.

    ​	We get them by calling either:

    ​		firestore.doc('/users/:userId');

    ​		firestore.collections('/users');

    ​	The queryReference object does not have the actual data of the collection or document. It instead has preperties that tell us details about it, or the method to get the Snapshot object which gives us the data we are looking for.

13. DocumentSnapshot

    ​	We get a documentSnapshot object from our documentReference object.
    
    ​	The documentSnapshot object allows us to check if a document exists at this query using the .exits property which returns a boolean.
    
    ​	We can also get the actual properties on the object by calling the .data() method, which returns us a JSON object of the document.
    
14. QuerySnapshot

    ​	We get a querySnapshot object from our collectionReference object.
    
    ​	We can check if there are any documents in the collection by calling the .empty property which returns a boolean.
    
    ​	We can get all the documents in the collection by calling the .docs property. It returns an array of our documents as documentSnapshot objects.
    
15. To be continued...

    ​	



