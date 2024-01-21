import { db, collection, getDocs } from '../Authentication/firebase.js';


export default async function Get_items() {
    const querySnapshot = await getDocs(collection(db, "Lost items"));
    var data = [];

    querySnapshot.forEach((doc) => {
        // console.log(doc.id, "=>", doc.data());
        data.push({item_name: doc.data()["item_name"], 
        location_lost: doc.data()["location_lost"], 
        found: doc.data()["found"], 
        email: doc.data()["email"], 
        description: doc.data()["description"], 
        date_lost: doc.data()["date_lost"]})
    });

    return data;
}
