import JSONdb from 'simple-json-db';

const FILEPATH = process.cwd() + '/db.json'

export class Database extends JSONdb {
  constructor(filepath: string = FILEPATH) {
    super(filepath);
    this.set('filepath', filepath)
    this.set('created_at', Date.now())
    this.set('updated_at', Date.now())
    this.sync();
  }

  get toString() {
    return JSON.stringify(this.JSON(), null, 2);
  }

  get keys() {
    return Object.keys(this.JSON());
  }
}

const db = new Database()

console.log(db);

