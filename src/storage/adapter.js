import fs from 'fs';

const FILE = './local_db.json';

export function saveRecord(record) {
  let data = [];

  if (fs.existsSync(FILE)) {
    data = JSON.parse(fs.readFileSync(FILE));
  }

  data.push(record);
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}
