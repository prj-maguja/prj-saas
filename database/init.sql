CREATE TABLE IF NOT EXISTS test_table (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255)
);

INSERT INTO test_table (name) VALUES ('Test Data');