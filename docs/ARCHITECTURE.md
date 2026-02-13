# Architecture

LXM Protocol Core follows a layered architecture:

1. Client submits input vector.
2. Validation layer evaluates structural compliance.
3. State processor applies ordered rules.
4. Generator produces deterministic artifact ID.
5. Integrity signature is attached.
6. Optional storage adapter persists result.

All operations are stateless and reproducible.

This architecture enables consistent artifact generation across distributed systems.
