import { db, collection, addDoc } from '../Authentication/firebase.js';


export function Add_items(date_lost, description, email, item_name, latitude, longitude) {
    // Add a new document with a generated id.

    addDoc(collection(db, "Lost items"), {
        date_lost: date_lost,
        description: description,
        email: email,
        found: false,
        item_name: item_name,
        latitude: latitude,
        longitude: longitude,
        returned_area: "N/a",
    });

    

}


