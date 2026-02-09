import { config } from 'dotenv';

config(options: { path: ".env"});

export const { PORT } = process.env;