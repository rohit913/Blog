const conf = {
  appwiteUrl: string(import.meta.env.VITE_APPWRITE_URL),
  appwiteProjectId: string(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwiteDatabaseId: string(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwiteCollectionId: string(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwiteBucketId: string(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};
export default conf;
