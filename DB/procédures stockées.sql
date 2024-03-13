-- Procédure inscription d'un étudiant 
DELIMITER //
CREATE PROCEDURE inscriptionEtudiant (nom VARCHAR(100), prenom VARCHAR(100), localisation VARCHAR(100), email VARCHAR(100), password VARCHAR(255))
BEGIN
    INSERT INTO users (firstname, secondname, localisation, email, password_hash)
    VALUES (nom, prenom, localisation, email, password);
END //
DELIMITER ;
-- Procédure Connexion d'un étudiant
DELIMITER //

CREATE PROCEDURE authenticateUser (IN p_email VARCHAR(255), IN p_password VARCHAR(255))
BEGIN
    DECLARE users_id INT;
    SELECT id INTO users_id FROM users WHERE email = p_email AND password = p_password;
    SELECT users_id;
END//

DELIMITER ;

-- Inscription d'un étudiant à un événement 
DELIMITER //
CREATE PROCEDURE inscriptionEvent (userId INT, eventID INT)
BEGIN
    INSERT INTO event_users (userId, eventId)
    VALUES (userId, eventId);
END //
DELIMITER ;

-- Incrémenter le nombre de votes/likes sur un évènement 
DELIMITER //
CREATE PROCEDURE ajouterVote (eventId INT)
BEGIN
    UPDATE events SET likes = likes + 1 WHERE id = eventId;
END //
DELIMITER ;

-- Proposer un évènement 
DELIMITER //
CREATE PROCEDURE suggestEvent (userId INT, name VARCHAR(255), description VARCHAR(500), poster VARCHAR(200) )
BEGIN
    INSERT INTO events (authorId, name, description, poster)
    VALUES (userId, name, description, poster);
END //
DELIMITER ;

-- Ajouter une photo à un événement passé
DELIMITER //
CREATE PROCEDURE addPhoto (authorId INT, eventId INT, poster VARCHAR(255), datePosted DATE)
BEGIN
    INSERT INTO images_related (authorId, eventId, poster, datePosted)
    VALUES (authorId, eventId, poster, datePosted);
END //
DELIMITER ;

--Ajout d'un commentaire
DELIMITER //
CREATE PROCEDURE InsertComment(authorId INT, relativeId INT, content VARCHAR(255), datePosted DATE)
BEGIN
    INSERT INTO comments (authorId, relativeId, content, datePosted)
    VALUES (authorId, relativeId, content, datePosted);
END //
DELIMITER ;

--Affichage des commentaires
DELIMITER //

CREATE PROCEDURE ShowComment(IN tableName VARCHAR(255), IN recordId VARCHAR(255))
BEGIN
  SET @query = CONCAT('SELECT * FROM ', tableName, ' WHERE id = ''', recordId, '''');
  PREPARE stmt FROM @query;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END //

DELIMITER ;

--Suppression d'un commentaire
DELIMITER //

CREATE PROCEDURE DeleteComment(IN tableName VARCHAR(255), IN recordId VARCHAR(255))
BEGIN
  SET @query = CONCAT('DELETE FROM ', tableName, ' WHERE id = ''', recordId, '''');
  PREPARE stmt FROM @query;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END //

DELIMITER ;

--Validation d'un évènement
DELIMITER //

CREATE PROCEDURE ValidateEvent(
  IN eventId INT,
  IN beginDate DATE,
  IN endDate DATE
)
BEGIN
  UPDATE events
  SET beginDate = beginDate, endDate = endDate, state = 'scheduled'
  WHERE id = eventId;
END //

DELIMITER ;

--Insérer un évènement 
DELIMITER //

CREATE PROCEDURE InsertEvent(
  IN authorId INT,
  IN eventName VARCHAR (255),
  IN eventDescription VARCHAR (1000),
  IN poster VARCHAR (255),
  IN category VARCHAR (255),
)
BEGIN
  INSERT INTO events (authorId, name, description, poster, category)
  VALUES (authorId, eventName, eventDescription, poster, category)
END

DELIMITER;


--Afficher les évènements passés
DELIMITER //

CREATE PROCEDURE GetAllPastEvents()
BEGIN
  SELECT *
  FROM events
  WHERE endDate < CURDATE();
END //

DELIMITER ;

--Effacer un évènement
DELIMITER //

CREATE PROCEDURE DeleteEvent(IN eventId INT)
BEGIN
  DELETE FROM events WHERE id = eventId;
END //

DELIMITER ;


--Ajout d'une idée
DELIMITER //

CREATE PROCEDURE InsertIdea (
  IN authorId INT,
  IN title VARCHAR(255),
  IN content VARCHAR(1000),
  IN datePosted DATE
)
BEGIN
  INSERT INTO ideas (authorId, title, content, datePosted)
  VALUES (authorId, title, content, datePosted);
END //

DELIMITER ;

--Retrouver l'idée par son ID
DELIMITER //

CREATE PROCEDURE GetIdeaById (IN ideaId INT)
BEGIN
  SELECT * FROM ideas WHERE id = ideaId;
END

DELIMITER //


--Afficher toutes les idées 
DELIMITER //

CREATE PROCEDURE GetAllIdeas ()
BEGIN
  SELECT * FROM ideas;
END

DELIMITER ;

--Suppression d'une idée
DELIMITER //

CREATE PROCEDURE RemoveIdeaById (IN ideaId INT)
BEGIN
  DELETE FROM ideas WHERE id = ideaId;
END //

DELIMITER ;

--Suppression des likes
DELIMITER //

CREATE PROCEDURE RemoveLike(IN tableName VARCHAR(255), IN itemId INT)
BEGIN
  SET @query = CONCAT('UPDATE ', tableName, ' SET likes = likes - 1 WHERE id = ', itemId);
  PREPARE stmt FROM @query;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END //

DELIMITER ;


--Compter le nombre de likes
DELIMITER //

CREATE PROCEDURE GetLikeNumber(IN tableName VARCHAR(255), IN itemName VARCHAR(255), OUT likeCount INT)
BEGIN
  SET @query = CONCAT('SELECT likes INTO @likeCount FROM ', tableName, ' WHERE name = ''', itemName, '''');
  PREPARE stmt FROM @query;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
  SET likeCount = @likeCount;
END //

DELIMITER ;


--Ajouter des likes
DELIMITER //

CREATE PROCEDURE AddLike(IN tableName VARCHAR(255), IN itemId INT)
BEGIN
  SET @query = CONCAT('UPDATE ', tableName, ' SET likes = likes + 1 WHERE id = ', itemId);
  PREPARE stmt FROM @query;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END //

DELIMITER ;


--Affichage de tout les produits
DELIMITER //

CREATE PROCEDURE GetAllProducts()
BEGIN
  SELECT * FROM products;
END //

DELIMITER ;

--Affichage de tout les évènements
DELIMITER //

CREATE PROCEDURE GetAllPastEvents()
BEGIN
  SELECT * FROM events;
END //

DELIMITER ;

--Afficher les produits par catégorie
DELIMITER //

CREATE PROCEDURE GetProductsByCategory(IN categoryParam VARCHAR(255))
BEGIN
  SELECT * FROM products WHERE category = categoryParam;
END //

DELIMITER ;

--Afficher les produits par Nom
DELIMITER //

CREATE PROCEDURE GetProductsByName(IN productNameParam VARCHAR(255))
BEGIN
  SELECT * FROM products WHERE name = productNameParam;
END //

DELIMITER ;

--Aficher les produits par leurs ID
DELIMITER //

CREATE PROCEDURE GetProductById(IN idParam INT)
BEGIN
  SELECT * FROM products WHERE id = idParam;
END //

DELIMITER ;