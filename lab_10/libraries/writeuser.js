import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function writeUser(username, dbSettings) {
    console.log(`touched username ${username}`);
    const db = await open(dbSettings)
    await db.exec('CREATE TABLE IF NOT EXISTS user (name)');
    await db.exec(`INSERT INTO user VALUES ("${username}")`);
    const result = await db.each('SELECT * FROM user', (err) => {
        console.log('writeuser', err);
    });
    console.log('Expected result', result);
    return result;
  }
  
//export default writeUser;

async function writeInfo(name, zip, interest , dbSettings) {
  console.log(`touched name ${name}`);
  const db = await open(dbSettings)
  await db.exec('CREATE TABLE IF NOT EXISTS userInfo (name, zip, interest)');
  await db.exec(`INSERT INTO name VALUES ("${name}")`);
  await db.exec(`INSERT INTO zip VALUES ("${zip}")`);
  await db.exec(`INSERT INTO interest VALUES ("${interest}")`);
  const result = await db.each('SELECT * FROM user', (err) => {
      console.log('writeuser', err);
  });
  console.log('Expected result', result);
  return result;
}

//export default writeInfo;

//   import writeUser from "./libraries/writeuser";

// 