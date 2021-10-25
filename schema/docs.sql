CREATE DATABASE saucedocs;

CREATE TABLE docs(
    doc_id SERIAL PRIMARY KEY,
    images  TEXT[] NOT NULL,
    title  VARCHAR(255) NOT NULL,
    teacher  VARCHAR(255) NOT NULL,
    school VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    creation_date DATE ,
    views INT,
    ratings INT[],
    avg_rating INT,
    grade VARCHAR(255),
    tags TEXT[],
    ap BOOLEAN
);