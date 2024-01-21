import { db, collection, addDoc } from '../Authentication/firebase.js';


export function Add_items(data_lost, description, email, found = false, item_name, location_lost, returned_area = 'N/A') {
    // Add a new document with a generated id.

    addDoc(collection(db, "Lost items"), {
        data_lost: data_lost,
        description: description,
        email: email,
        found: found,
        item_name: item_name,
        location_lost: location_lost,
        returned_area: returned_area,
    });

    

}


