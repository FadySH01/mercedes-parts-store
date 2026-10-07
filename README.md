# Mercedes-Benz Parts Store

Small React + Firebase starter for the parts marketplace. Vite serves and builds the app; Tailwind CSS 4 is included through its Vite plugin. The storefront is split into pages, feature folders and shared components/data so each file has one job.

## Run locally

1. Install Node.js LTS.
2. In this folder, run `npm install`.
3. Copy `.env.example` to `.env.local` and add the Web App values from Firebase Console → Project settings → Your apps.
4. In Firebase Console, enable **Authentication → Email/Password** and create a **Cloud Firestore** database.
5. Run `npm run dev` and open the local URL Vite prints.

Without Firebase values, the catalog remains viewable but account and cart saving stay disabled. Firebase Web config identifies the project; restrict the API key in Google Cloud and rely on Firebase Auth plus Firestore Rules for access control. Never put service-account credentials in this frontend.

## Firebase data layout

- `products/{productId}` — catalog items (public read; maintain from Firebase Console or trusted admin tooling).
- `carts/{uid}` — `{ items: [{ id, quantity }], updatedAt }`; readable only by that signed-in owner.
- `users/{uid}` — customer profile and preferences.
- `orders/{orderId}` — customer order records; payment confirmation must be created by a trusted server/webhook.
- `partRequests/{requestId}` — sourcing enquiries; create-only from client under the provided rules.

Deploy rules with `firebase deploy --only firestore:rules`. Payment processing, admin roles, live chat, WhatsApp routing, upload storage, order tracking and video-call scheduling need trusted server/admin configuration before production use. Do not treat client-side prices or client-submitted payment state as authoritative.

