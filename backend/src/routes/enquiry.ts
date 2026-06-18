import { Router } from 'express';
import { createEnquiry } from '../controllers/enquiryController';

const router = Router();

/**
 * POST /api/enquiry
 * Register a new workshop enquiry.
 */
router.post('/', createEnquiry);

export default router;
