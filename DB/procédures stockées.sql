-- Procédure inscription d'un étudiant 
DELIMITER //
CREATE PROCEDURE inscriptionEtudiant (nom VARCHAR(100), prenom VARCHAR(100), localisation VARCHAR(100), email VARCHAR(100), password VARCHAR(255))
BEGIN
    INSERT INTO users (firstname, secondname, localisation, email, password_hash)
    VALUES (nom, prenom, localisation, email, password);
END //
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