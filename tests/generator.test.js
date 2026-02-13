import assert from 'node:assert';
import { simulateHash } from '../src/utils/hashing.js';
import { generateArtifactId, createSeal } from '../src/core/generator.js';

console.log('Running LXM Protocol Core Tests...');

const input = ['SEG_A', 'SEG_B'];

assert.strictEqual(simulateHash(input), simulateHash(input));
const id = generateArtifactId(input);
assert.ok(id.startsWith('LXM-'));

const seal = createSeal(input);
assert.strictEqual(seal.status, 'VERIFIED');

console.log('All tests passed.');
