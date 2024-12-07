import sql from "k6/x/sql";
import driver from "k6/x/sql/driver/db2luw";

const db = sql.open(driver, "HOSTNAME=localhost;PORT=50000;DATABASE= pebnch;UID=db2inst1;PWD= pass1;");

export function setup() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS roster
      (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        given_name VARCHAR NOT NULL,
        family_name VARCHAR NOT NULL
      );
  `);
}

export function teardown() {
  db.close();
}

export default function () {
  let result = db.exec(`
    INSERT INTO roster
      (given_name, family_name)
    VALUES
      ('Peter', 'Pan'),
      ('Wendy', 'Darling'),
      ('Tinker', 'Bell'),
      ('James', 'Hook');
  `);
  console.log(`${result.rowsAffected()} rows inserted`);

  let rows = db.query("SELECT * FROM roster WHERE given_name = $1;", "Peter");
  for (const row of rows) {
    console.log(`${row.family_name}, ${row.given_name}`);
  }
}
