DROP TABLE IF EXISTS cars;
CREATE TABLE cars (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  make TEXT NOT NULL,
  model TEXT,
  year INTEGER NOT NULL
)