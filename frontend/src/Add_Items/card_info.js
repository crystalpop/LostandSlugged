import { db, collection, getDocs, orderBy, query } from '../Authentication/firebase.js';

export default async function Get_items() {
    const q = query(collection(db, "Lost items"), orderBy("date_lost", "asc"));
    const querySnapshot = await getDocs(q);
    var data = [];

    querySnapshot.forEach((doc) => {
        data.push({
            item_name: doc.data()["item_name"],
            latitude: doc.data()["latitude"],
            longitude: doc.data()["longitude"],
            found: doc.data()["found"],
            email: doc.data()["email"],
            description: doc.data()["description"],
            date_lost: doc.data()["date_lost"]
        });
    });

    return data;
}