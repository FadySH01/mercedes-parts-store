# Everything Benz admin setup

1. Create a Firebase project. Enable Authentication (Email/Password), Firestore and Storage.
2. Copy `.env.example` to `.env.local` and enter the Firebase web app configuration.
3. Publish `firestore.rules` and `storage.rules` in the Firebase console before adding any product data.
4. Register the administrator account on `/register`.
5. In Firestore, create `admins/{that user's Firebase Auth UID}` with the boolean field `active: true`. Only the Firebase console or another trusted server should grant this role.
6. Open `/admin` while signed in. Add a model first, then its parts. Parts marked **Not available** remain visible with a request action.
7. The admin catalog lets you replace a product image or delete a product. Set `VITE_WHATSAPP_NUMBER` in `.env.local` to your real international-format number to enable WhatsApp links.

Static demonstration images remain in `src/assets/images`. Images uploaded by an administrator at runtime are stored in Firebase Storage; a browser cannot add files to the deployed source folder.

The built-in sourcing catalog describes part types and requests quotes; it does not represent confirmed stock or prices. Products added in the admin workspace appear alongside it and can be managed there.
