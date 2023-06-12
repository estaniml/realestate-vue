import { getStorage, ref } from "firebase/storage";

export const uploadImage = async (img) => {
    const storage = getStorage();
    const imageRef = ref(storage, img);
    console.log(imageRef);

    return 
}