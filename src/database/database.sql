CREATE TABLE Users(
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(40),
    Email VARCHAR(120),
    Password VARCHAR(15)
);


CREATE TABLE Libraries(
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(40),
    Description VARCHAR(120),
    User_id INT,
       CONSTRAINT fk_user
        FOREIGN KEY(User_id) 
	        REFERENCES Users(Id)
);


CREATE TABLE Categories(
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(40),
    Description VARCHAR(120),
    ImageUrl VARCHAR,
    Library_id INT,
       CONSTRAINT fk_library
        FOREIGN KEY(Library_id) 
	        REFERENCES Libraries(Id)
);


CREATE TABLE Links(
    Id SERIAL PRIMARY KEY,
    Name VARCHAR(40),
    Description VARCHAR(120),
    ImageUrl VARCHAR,
    UrlLink VARCHAR,
    Category_id INT,
       CONSTRAINT fk_category
        FOREIGN KEY(Category_id) 
	        REFERENCES Categories(Id)
);