import { db, collection, getDocs } from '../Authentication/firebase.js';


export default async function Get_items() {
    const querySnapshot = await getDocs(collection(db, "Lost items"));
    // if (querySnapshot.exists()) {
    //     const docData = mySnapshot.data();
    await querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data()['description']);
    });
    // }
// return('hi');
}
