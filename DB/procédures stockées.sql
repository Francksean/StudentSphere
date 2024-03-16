-- Procédure inscription étudiant
DELIMITER |
CREATE PROCEDURE inscriptionEtudiant (nom VARCHAR(100), prenom VARCHAR(100), localisation VARCHAR(100), email VARCHAR(100), password VARCHAR(255))
BEGIN
    INSERT INTO users (firstname, secondname, localisation, email, password_hash)
    VALUES (nom, prenom, localisation, email, password);
END |

-- Procédure Connexion étudiant

DELIMITER |
CREATE PROCEDURE authenticateUser (IN p_email VARCHAR(255), IN p_password VARCHAR(255))
BEGIN
    DECLARE users_id INT;
    SELECT id INTO users_id FROM users WHERE email = p_email AND password_hash = p_password;
    SELECT users_id;
END |

-- Inscription étudiant à un événement
DELIMITER |
CREATE PROCEDURE inscriptionEvent (userId INT, eventID INT)
BEGIN
    INSERT INTO event_users (userId, eventId)
    VALUES (userId, eventID);
END |

-- Incrémenter le nombre de votes/likes sur un évènement
DELIMITER |
CREATE PROCEDURE ajouterVote (eventId INT)
BEGIN
    UPDATE events SET likes = likes + 1 WHERE id = eventId;
END |

-- Proposer un évènement
DELIMITER |
CREATE PROCEDURE suggestEvent (userId INT, name VARCHAR(255), description VARCHAR(500), poster VARCHAR(200) )
BEGIN
    INSERT INTO events (authorId, name, description, poster)
    VALUES (userId, name, description, poster);
END |

-- Ajouter une photo à un événement passé
DELIMITER |
CREATE PROCEDURE addPhoto (authorId INT, eventId INT, poster VARCHAR(255), datePosted DATE)
BEGIN
    INSERT INTO images_related (authorId, eventId, poster, datePosted)
    VALUES (authorId, eventId, poster, datePosted);
END |

--Ajout commentaire produits
DELIMITER |
CREATE PROCEDURE addProductComment(
    IN authorId INT,
    IN productId INT,
    IN datePosted DATE,
    IN content VARCHAR(1000)
  )
BEGIN
  INSERT INTO product_comments (authorId, productId, datePosted, content)
  VALUES (authorId, productId, datePosted, content );
END |

--Ajout commentaire events
DELIMITER |
CREATE PROCEDURE addEventComment(
    IN authorId INT,
    IN eventId INT,
    IN datePosted DATE,
    IN content VARCHAR(1000)
  )
BEGIN
  INSERT INTO event_comments (authorId, eventId, datePosted, content)
  VALUES (authorId, productId, datePosted, content );
END |

--Ajout commentaire idées
DELIMITER |
CREATE PROCEDURE addIdeaComment(
    IN authorId INT,
    IN ideaId INT,
    IN datePosted DATE,
    IN content VARCHAR(1000)
  )
BEGIN
  INSERT INTO idea_comments (authorId, ideaId, datePosted, content)
  VALUES (authorId, ideaId, datePosted, content );
END |



--Affichage des commentaires event
DELIMITER |
CREATE PROCEDURE ShowEventComments(IN id INT)
BEGIN
  SELECT * FROM event_comments WHERE eventId = id;
END |

--Affichage des commentaires produit
DELIMITER |
CREATE PROCEDURE ShowProductComments(IN id INT)
BEGIN
  SELECT * FROM product_comments WHERE eventId = id;
END |

--Affichage des commentaires idée
DELIMITER |
CREATE PROCEDURE ShowIdeaComments(IN id INT)
BEGIN
  SELECT * FROM idea_comments WHERE eventId = id;
END |

--Suppression d'un commentaire d'un event
DELIMITER |
CREATE PROCEDURE DeleteEventComment (IN id INT)
BEGIN
  DELETE FROM event_comments WHERE id = id;
END |

--Suppression d'un commentaire d'un produit
DELIMITER |
CREATE PROCEDURE DeleteProductComment (IN id INT)
BEGIN
  DELETE FROM product_comments WHERE id = id;
END |

--Suppression d'un commentaire d'une idée
DELIMITER |
CREATE PROCEDURE DeleteIdeaComment (IN id INT)
BEGIN
  DELETE FROM idea_comments WHERE id = id;
END |

--Validation d'un évènement
DELIMITER |
CREATE PROCEDURE ValidateEvent(
  IN eventId INT,
  IN beginDate DATE,
  IN endDate DATE
)
BEGIN
  UPDATE events
  SET beginDate = beginDate, endDate = endDate, state = 'scheduled'
  WHERE id = eventId;
END |

--Insérer un évènement
DELIMITER |
CREATE PROCEDURE InsertEventBDE(
  IN authorId INT,
  IN eventName VARCHAR(255),
  IN eventDescription VARCHAR(1000),
  IN datePosted DATE,
  IN beginDate DATE,
  IN endDate DATE,
  IN poster VARCHAR(255),
  IN category VARCHAR(255)
)
BEGIN
  INSERT INTO events (authorId, name, description, datePosted, beginDate, endDate, poster, category)
  VALUES (authorId, eventName, eventDescription, datePosted, beginDate, endDate, poster, category);
END |

--Insérer un évènement
DELIMITER |
CREATE PROCEDURE InsertEvent(
  IN authorId INT,
  IN eventName VARCHAR(255),
  IN eventDescription VARCHAR(1000),
  IN datePosted DATE,
  IN poster VARCHAR(255),
  IN category VARCHAR(255)
)
BEGIN
  INSERT INTO events (authorId, name, description, datePosted, poster, category)
  VALUES (authorId, eventName, eventDescription, datePosted, poster, category);
END |

--Afficher les évènements passés
DELIMITER |
CREATE PROCEDURE GetAllPastEvents()
BEGIN
  SELECT *
  FROM events
  WHERE endDate < CURDATE();
END |

--Effacer un évènement
DELIMITER |
CREATE PROCEDURE DeleteEvent(IN eventId INT)
BEGIN
  DELETE FROM events WHERE id = eventId;
END |

--Ajout d'une idée
DELIMITER |
CREATE PROCEDURE InsertIdea (
  IN authorId INT,
  IN title VARCHAR(255),
  IN content VARCHAR(1000),
  IN datePosted DATE
)
BEGIN
  INSERT INTO ideas (authorId, title, content, datePosted)
  VALUES (authorId, title, content, datePosted);
END |

--Retrouver l'idée par son ID
DELIMITER |
CREATE PROCEDURE GetIdeaById (IN ideaId INT)
BEGIN
  SELECT * FROM ideas WHERE id = ideaId;
END |

--Afficher toutes les idées
DELIMITER |
CREATE PROCEDURE GetAllIdeas ()
BEGIN
  SELECT * FROM ideas;
END |

--Suppression d'une idée
DELIMITER |
CREATE PROCEDURE RemoveIdeaById (IN ideaId INT)
BEGIN
  DELETE FROM ideas WHERE id = ideaId;
END |

--Suppression des likes d'un event
DELIMITER |
CREATE PROCEDURE RemoveEventLike(IN itemId INT)
BEGIN
  UPDATE events SET likes = likes - 1 WHERE id = itemId;
END |

--Suppression des likes d'un produit
DELIMITER |
CREATE PROCEDURE RemoveProductLike(IN itemId INT)
BEGIN
  UPDATE products SET likes = likes - 1 WHERE id = itemId;
END |

--Suppression des likes d'une idée
DELIMITER |
CREATE PROCEDURE RemoveIdeaLike(IN itemId INT)
BEGIN
  UPDATE ideas SET likes = likes - 1 WHERE id = itemId;
END |

--Ajouter des likes d'un évènement
DELIMITER |
CREATE PROCEDURE AddEventLike(IN itemId INT)
BEGIN
  UPDATE events SET likes = likes + 1 WHERE id = itemId;
END |

--Ajouter des likes d'un produit
DELIMITER |
CREATE PROCEDURE AddProductLike(IN itemId INT)
BEGIN
  UPDATE products SET likes = likes + 1 WHERE id = itemId;
END |

--Ajouter des likes d'une idée
DELIMITER |
CREATE PROCEDURE AddIdeaLike(IN itemId INT)
BEGIN
  UPDATE ideas SET likes = likes + 1 WHERE id = itemId;
END |

--Affichage de tous les produits
DELIMITER |
CREATE PROCEDURE GetAllProducts()
BEGIN
  SELECT * FROM products;
END |

--Affichage de tout les évènements
DELIMITER |
CREATE PROCEDURE GetAllEvents()
BEGIN
  SELECT * FROM events;
END |

--Afficher les produits par catégorie
DELIMITER |
CREATE PROCEDURE GetProductsByCategory(IN categoryParam VARCHAR(255))
BEGIN
  SELECT * FROM products WHERE category = categoryParam;
END |

--Afficher les produits par Nom
DELIMITER |
CREATE PROCEDURE GetProductsByName(IN productNameParam VARCHAR(255))
BEGIN
  SELECT * FROM products WHERE name = productNameParam;
END |

--Aficher les produits par leur ID
DELIMITER |
CREATE PROCEDURE GetProductById(IN idParam INT)
BEGIN
  SELECT * FROM products WHERE id = idParam;
END |

--Récupérer le nombre de likes d'un event
DELIMITER |
CREATE PROCEDURE GetEventLikeNumber(IN id INT)
BEGIN
  SELECT likes FROM events WHERE id = id;
END |

--Récupérer le nombre de likes d'un produit
DELIMITER |
CREATE PROCEDURE GetProductLikeNumber(IN id INT)
BEGIN
  SELECT likes FROM products WHERE id = id;
END |

--Récupérer le nombre de likes d'une idée
DELIMITER |
CREATE PROCEDURE GetIdeaLikeNumber(IN id INT)
BEGIN
  SELECT likes FROM ideas WHERE id = id;
END |

