import { createSeal } from '../core/generator.js';
import { validateBalance } from '../core/entropy.js';

export const initiateProtocol = (req, res) => {
  const { vectors } = req.body;

  if (!Array.isArray(vectors)) {
    return res.status(400).json({ error: 'Invalid input.' });
  }

  return res.json({
    status: 'INITIALIZED',
    session_id: `SES-${Date.now()}`
  });
};

export const finalizeProtocol = (req, res) => {
  const { vectors } = req.body;

  if (!validateBalance(vectors)) {
    return res.status(422).json({ error: 'Validation failed.' });
  }

  const seal = createSeal(vectors);
  return res.json({ status: 'SUCCESS', data: seal });
};
