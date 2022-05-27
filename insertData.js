const { pool } = require("./db");

async function insertData() {
  const [name, desc] = process.argv.slice(2);
  try {
    const res = await pool.query(
      "INSERT INTO todo (name, description) VALUES ($1, $2)",
      [name, desc]
    );
    console.log(`Added a todo with name ${name}`);
  } catch (error) {
    console.error(error);
  }
}

insertData();