import { setDoc, doc, getDocs, query, collection, orderBy} from "firebase/firestore";
import { firestore } from "../firebase.config";

export const saveItem = async (data) => {
    await setDoc(doc(firestore , "foodItems" , `${Date.now()}`), data,{
        merge : true,
    });
};

export const getFoodItems = async() => {
    const items = await getDocs( 
        query(collection(firestore , 'foodItems') , orderBy('id','desc') )
    );

    return items.docs.map((doc) => doc.data());
};

export const saveOrderDetails = async(data) => {
    await setDoc(doc(firestore, "orderDetails", `${Date.now()}`),data,{
        merge : true,
    });
};

export const saveContactDetails = async(data) => {
    await setDoc(doc(firestore, 'contactDetails', `${Date.now()}`),data,{
        merge:true
    });
};