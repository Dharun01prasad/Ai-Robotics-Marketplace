import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import enquiryRouter from './routes/enquiry';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || '';

// ── Middleware ───────────────────────────────────────────────────────────────
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Routes ───────────────────────────────────────────────────────────────────
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'kidrove-workshop-api' });
});

app.use('/api/enquiry', enquiryRouter);

// ── 404 handler ──────────────────────────────────────────────────────────────
app.use((_req: Request, res: Response) => {
  res.status(404).json({ success: false, message: 'Route not found.' });
});

// ── Global error handler ─────────────────────────────────────────────────────
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal server error.' });
});

// ── Database + server startup ────────────────────────────────────────────────
const start = async (): Promise<void> => {
  if (MONGO_URI) {
    try {
      await mongoose.connect(MONGO_URI);
      console.log('✅  MongoDB connected');
    } catch (err : any) {
      console.error("===== FULL ERROR =====");
      console.error("Name:", err.name);
      console.error("Message:", err.message);
      console.error("Code:", err.code);
      console.error(err);
    }
  } else {
    console.warn('⚠️  MONGO_URI not set – running without DB (responses will be stubs).');
  }

  app.listen(PORT, () => {
    console.log(`🚀  API server running at http://localhost:${PORT}`);
  });
};

start();
