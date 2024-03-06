-- Procédure inscription d'un étudiant 


CREATE PROCEDURE inscriptionEtudiant (nom, prenom, localisation, email, password)
BEGIN
	INSERT INTO (firstname, secondname,localisation,email,password) users
	VALUES(nom,prenom,localisation,email,password);
END
DELIMITER;

-- Inscription d'un étudiant à un événement 

CREATE PROCEDURE inscriptionEvent (userId, eventID)
BEGIN
	INSERT INTO event_users(userId, eventId)
	VALUES (userId, eventId);
END
DELIMITER;

-- Icrémenter le nombre de votes/likes sur un évènement 

CREATE PROCEDURE ajouterVote (eventId)
BEGIN
	UPDATE events SET likes = likes + 1 WHERE id = eventId;
END
DELIMITER;

-- Proposer un évènement 

CREATE PROCEDURE suggestEvent (userId, name, description, poster )
BEGIN
	INSERT INTO events (authorId, name, description, poster)
	VALUES (userId,name,description,poster);
END
DELIMITER;

-- Ajouter une photo à un événement passé

CREATE PROCEDURE addPhoto (authorId,eventId,poster,date)
BEGIN
	INSERT INTO images_related (authorId, eventId,poster,datePosted)
	VALUES (authorId,eventId,poster,date)
END
DELIMITER;
