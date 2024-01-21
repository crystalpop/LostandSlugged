import React from "react";
import { db, collection, addDoc } from '../Authentication/firebase.js';


export function Add_items(date_lost, description, email, found = false, item_name, latitude, longitude, returned_area = 'N/A', reward = 0, time_lost, time_found = 'N/A', image = 'N/A') {
    // Add a new document with a generated id.
    console.log(date_lost);
    addDoc(collection(db, "Lost items"), {
        date_lost: date_lost,
        description: description,
        email: email,
        found: found,
        item_name: item_name,
        latitude: latitude,
        logitude: longitude,
        returned_area: returned_area,
    });

}   

