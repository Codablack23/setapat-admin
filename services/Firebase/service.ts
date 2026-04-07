import { getDownloadURL, ref, uploadBytes  } from "firebase/storage";
import { storage } from "../services.config";

export class FirebaseProvider{
 static async uploadFile(file: File) {
    const storageRef = ref(storage, `uploads`);
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(snapshot.ref);
      return downloadUrl;
    } catch (error) {
      throw error;
    }
  }
}