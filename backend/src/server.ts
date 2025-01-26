import express from 'express'; // No need for { Express } in ESM, just import express
import dotenv from 'dotenv'; // Standard ESM import

dotenv.config();

const app = express(); // No need to explicitly define the type in ESM
const PORT = process.env.SERVER_PORT || 8000; // TypeScript will infer the type automatically

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
