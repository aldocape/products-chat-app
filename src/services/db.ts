import dotenv from 'dotenv';
dotenv.config();

const mariaDB = {
  client: 'sqlite3',
  connection: {
    filename: './DB/e-commerce.sqlite',
  },
  useNullAsDefault: true,
};

const SQLiteDB = {
  client: 'sqlite3',
  connection: {
    filename: './DB/ecommerce.sqlite',
  },
  useNullAsDefault: true,
};

export { mariaDB, SQLiteDB };
