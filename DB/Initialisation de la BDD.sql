-- Création de la table users

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL UNIQUE,
    firstname VARCHAR(100) NOT NULL,
    secondname VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    localisation VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    profilePic VARCHAR(200),
    status INT NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);


-- Création de la table events

-- "State" peut être : - proposé - validé - en cours - terminé
-- "Category" peut être : - manifestation - activité

DROP TABLE IF EXISTS events;

CREATE TABLE events(
    id INT AUTO_INCREMENT NOT NULL UNIQUE,
    authorId INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(500) NOT NULL,
    datePosted DATE NOT NULL,
    beginDate DATE,
    endDate DATE,
    poster VARCHAR(200),
    category VARCHAR(50) NOT NULL,
    likes INT NOT NULL DEFAULT 0,
    state VARCHAR(20),
    PRIMARY KEY (id),
    FOREIGN KEY (authorId) REFERENCES users(id)
);

-- Création de la table event_users

-- Pour gérer les inscriptions des utilisateurs aux événements 

CREATE TABLE event_users (
    eventId INT NOT NULL,
    userId INT NOT NULL,
    PRIMARY KEY (eventId, userId),
    FOREIGN KEY (eventId) REFERENCES events(id),
    FOREIGN KEY (userId) REFERENCES users(id)
);

-- Création de la table ideas

CREATE TABLE ideas (
    id INT NOT NULL AUTO_INCREMENT UNIQUE,
    authorId INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content VARCHAR(1000) NOT NULL,
    datePosted DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (authorId) REFERENCES users(id)
);


-- Création de event_comments

CREATE TABLE event_comments (
    id INT NOT NULL UNIQUE AUTO_INCREMENT,
    authorId INT NOT NULL,
    eventId INT NOT NULL,
    datePosted DATE NOT NULL,
    content VARCHAR(1000) NOT NULL,
    likes INT DEFAULT 0,
    PRIMARY KEY (id),
    FOREIGN KEY (authorId) REFERENCES users(id),
    FOREIGN KEY (eventId) REFERENCES events(id) 
)

-- Création de event_likes

CREATE TABLE event_likes (
    id INT NOT NULL UNIQUE AUTO_INCREMENT,
    authorId INT NOT NULL,
    eventId INT NOT NULL,
    dateLiked DATE NOT NULL,
    likes INT DEFAULT 0,
    PRIMARY KEY (id),
    FOREIGN KEY (authorId) REFERENCES users(id),
    FOREIGN KEY (eventId) REFERENCES events(id) 
);

-- Création de idea_comments

CREATE TABLE idea_comments (
    id INT NOT NULL UNIQUE AUTO_INCREMENT,
    authorId INT NOT NULL,
    ideaId INT,
    datePosted DATE NOT NULL,
    content VARCHAR(1000) NOT NULL,
    likes INT DEFAULT 0,
    PRIMARY KEY (id),
    FOREIGN KEY (authorId) REFERENCES users(id),
    FOREIGN KEY (ideaId) REFERENCES ideas(id) -- Ajout d'une virgule après la première clé étrangère
);

-- Création de la table images_related

CREATE TABLE images_related(
   id INT AUTO_INCREMENT UNIQUE NOT NULL,
   authorId INT NOT NULL,
   eventId INT NOT NULL,
   poster VARCHAR(255) NOT NULL,
   datePosted DATE NOT NULL,
   PRIMARY KEY (id),
   FOREIGN KEY (authorId) REFERENCES users(id),
   FOREIGN KEY (eventId) REFERENCES events(id) -- Ajout d'une virgule après la première clé étrangère
);


-- Création de la table image_related_comments

CREATE TABLE image_related_comments (
    id INT NOT NULL UNIQUE AUTO_INCREMENT,
    authorId INT NOT NULL,
    relatedImageId INT NOT NULL, -- Correction : virgule manquante après la déclaration de la colonne relatedImageId
    datePosted DATE NOT NULL,
    content VARCHAR(1000) NOT NULL,
    likes INT DEFAULT 0,
    PRIMARY KEY (id),
    FOREIGN KEY (authorId) REFERENCES users(id),
    FOREIGN KEY (relatedImageId) REFERENCES images_related(id)
);



-- Création de la table products

CREATE TABLE products (
   id INT NOT NULL UNIQUE AUTO_INCREMENT,
   name VARCHAR(200) NOT NULL,
   poster VARCHAR(200) NOT NULL,
   category VARCHAR(100) NOT NULL,
   description VARCHAR(1000) NOT NULL,
   quantity INT NOT NULL,
   sale BOOLEAN DEFAULT 0,
   price INT NOT NULL,
   grade FLOAT,
   likes INT DEFAULT 0,
   PRIMARY KEY (id)
);

-- Création de la table product_comments

CREATE TABLE product_comments (
    id INT NOT NULL UNIQUE AUTO_INCREMENT,
    authorId INT NOT NULL,
    productId INT NOT NULL,
    datePosted DATE NOT NULL,
    content VARCHAR(1000) NOT NULL,
    likes INT DEFAULT 0,
    PRIMARY KEY (id),
    FOREIGN KEY (productId) REFERENCES products(id),
    FOREIGN KEY (authorId) REFERENCES users(id)
);

--Création de la table product_likes

CREATE TABLE product_likes (
    likerId INT NOT NULL,
    productId INT NOT NULL,
    PRIMARY KEY (likerId,productId),
    FOREIGN KEY (likerId) REFERENCES users(id),
    FOREIGN KEY (productId) REFERENCES products(id) 
);


--Création de la table Idea_likes

CREATE TABLE idea_likes (
    likerId INT NOT NULL,
    ideaId INT NOT NULL,
    PRIMARY KEY (likerId,ideaId),
    FOREIGN KEY (likerId) REFERENCES users(id),
    FOREIGN KEY (ideasId) REFERENCES ideas(id) 
);


--Création de la table image_related_likes

CREATE TABLE image_related_likes (
    likerId INT NOT NULL,
    image_relatedId INT NOT NULL,
    PRIMARY KEY (likerId,image_relatedId),
    FOREIGN KEY (likerId) REFERENCES users(id),
    FOREIGN KEY (image_relatedId) REFERENCES images_related(id) 
);