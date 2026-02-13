# API Reference

## POST /initiate

Body:
{
  "vectors": ["SEG_A", "SEG_B"]
}

Response:
{
  "status": "INITIALIZED",
  "session_id": "SES-<timestamp>"
}

---

## POST /finalize

Body:
{
  "vectors": ["SEG_A", "SEG_B"]
}

Response:
{
  "status": "SUCCESS",
  "data": {
    "id": "LXM-XXXXXX",
    "timestamp": "...",
    "components": [],
    "status": "VERIFIED",
    "signature": "0xSIM_..."
  }
}
