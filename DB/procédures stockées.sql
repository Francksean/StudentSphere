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

CREATE PROCEDURE authenticateUser (IN p_email VARCHAR(100), IN p_password VARCHAR(255))
BEGIN
    DECLARE users_id INT;
    SELECT id INTO users_id FROM users WHERE email = p_email AND password = p_password;
    SELECT users_id;
END//

DELIMITER ;

-- Inscription d'un étudiant à un événement 
DELIMITER //
CREATE PROCEDURE inscriptionEvent (userId INT, eventID INT)
BEGINss
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

CREATE PROCEDURE ShowComments(IN tableName VARCHAR(255), IN recordId VARCHAR(255))
BEGIN
  SET @query = CONCAT('SELECT * FROM ', tableName, ' WHERE id = ''', recordId, '''');
  PREPARE stmt FROM @query;
  EXECUTE stmt;
  DEALLOCATE PREPARE stmt;
END //

DELIMITER ;