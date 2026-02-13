import { simulateHash } from '../utils/hashing.js';

export function generateArtifactId(seedKeys) {
  const rawHash = simulateHash(seedKeys);
  return `LXM-${rawHash.substring(6, 14)}`;
}

export function createSeal(seedKeys = []) {
  const id = generateArtifactId(seedKeys);
  const signature = simulateHash({ id, seedKeys });

  return {
    id,
    timestamp: new Date().toISOString(),
    components: seedKeys,
    status: 'VERIFIED',
    signature
  };
}
