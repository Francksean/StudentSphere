-- Insertions de la table users
INSERT INTO users (firstname, secondname, email, localisation, password, profilePic, status) 
VALUES
('John', 'Doe', 'john.doe@example.com', 'New York', 'password123', 'profile1.jpg', 1),
('Jane', 'Smith', 'jane.smith@example.com', 'London', 'password456', 'profile2.jpg', 0),
('Michael', 'Johnson', 'michael.johnson@example.com', 'Los Angeles', 'password789', 'profile3.jpg', 1),
('Emily', 'Davis', 'emily.davis@example.com', 'Paris', 'password987', 'profile4.jpg', 0),
('Johmerry', 'Green', 'Johnmerry.Green@example.com', 'Douala', 'password435', 'profile5.jpg', 2);


-- Insertions de la table events
INSERT INTO events (authorId, name, description, datePosted, beginDate, endDate, poster, category, likes, state) 
VALUES
(1, 'Event 1', 'Description of Event 1', '2024-02-15', '2024-03-01', '2024-03-05', 'poster1.jpg', 'Conference', 10, 'Active'),
(2, 'Event 2', 'Description of Event 2', '2024-02-20', '2024-03-10', '2024-03-12', 'poster2.jpg', 'Workshop', 5, 'Active'),
(4, 'Event 3', 'Description of Event 3', '2024-02-25', '2024-03-15', '2024-03-18', 'poster3.jpg', 'Seminar', 8, 'Inactive'),
(3, 'Event 4', 'Description of Event 4', '2024-03-01', '2024-03-20', '2024-03-22', 'poster4.jpg', 'Webinar', 15, 'Active'),
(4, 'Event 5', 'Description of Event 5', '2024-03-05', '2024-03-25', '2024-03-27', 'poster5.jpg', 'Exhibition', 12, 'Active');

-- Insertions de la table event_users
-- Insertions dans la table event_users
INSERT INTO event_users (eventId, userId) 
VALUES
(1, 2), -- Jane Smith s'inscrit à l'événement 1
(1, 3), -- Michael Johnson s'inscrit à l'événement 1
(2, 1), -- John Doe s'inscrit à l'événement 2
(3, 4), -- Emily Davis s'inscrit à l'événement 3
(4, 1), -- John Doe s'inscrit à l'événement 4
(5, 2); -- Jane Smith s'inscrit à l'événement 5

-- Insertions de la table event_comments
INSERT INTO event_comments (authorId, eventId, datePosted, content, likes)
VALUES
(1, 1, '2024-03-06', 'Super événement, j''ai passé un bon moment!', 200),
(3, 3, '2024-03-06', 'Très bien organisé, merci aux organisateurs.', 180),
(2, 2, '2024-03-05', 'J''ai adoré cet événement, à refaire!', 250),
(4, 5, '2024-03-05', 'Très intéressant, j''ai beaucoup appris.', 280),
(5, 4, '2024-03-04', 'Ambiance géniale, je recommande.', 210),
(3, 1, '2024-03-04', 'C''était sympa, mais un peu trop de monde.', 190),
(1, 3, '2024-03-03', 'Bonne ambiance, mais les prix étaient un peu élevés.', 170),
(4, 2, '2024-03-03', 'Excellent événement, j''ai passé un moment inoubliable.', 300),
(2, 5, '2024-03-02', 'Je suis ravi d''avoir participé, à l''année prochaine!', 220),
(5, 4, '2024-03-02', 'Très belle expérience, je recommande.', 260);


-- Insertions de la table products
INSERT INTO products (name, poster, category, description, quantity, sale, price, grade, likes)
VALUES
('Tomate','tomate.jpg','fruits','Donnez une autre saveur a votr repas.',70, true, 150,5,521),
('Jadida','beurre.jpg','déjeuner',' Tartine et cuisson',10,false, 950,2.5,50),
('Pack Pomme','pomme.jpg','fruits','Grignoter quant vous en avez envie.',50, true, 2000,4,339),
('Tartina','chocolat.jpg','déjeuner',' Pate a tartiner',10,false, 250,3,307),
('Cappuccino','cappuccino.jpg','déjeuner','Cafe au lait',3,false,3000,3,12),
('Papier toilette','papier.jpg','hygiène',' Essuie tout',15,true,1200,3,283),
('Fast Charger Iphone','charge-iphone','goodies','Charge rapide et securisee',5,false,10 000,3,800),
('Sucre en Poudre','sucre.jpg','déjeuner',' donnez un gout sucre a vos degustation',10,false,1000,5,689),
('Fast Charger Type-C','charge-typeC',10,false,5000,2.5,100);



-- Insertions de la table product_comments
INSERT INTO product_comments (authorId, productId, datePosted, content, likes)
VALUES
(1, 1, '2024-03-06', 'Super produit, je le recommande vivement!', 150),
(3, 3, '2024-03-06', 'Très satisfait de cet achat.', 180),
(2, 2, '2024-03-05', 'Produit de qualité, livraison rapide.', 170),
(4, 5, '2024-03-05', 'J''adore ce t-shirt, il est très confortable.', 190),
(5, 4, '2024-03-04', 'Excellent rapport qualité-prix.', 160),
(3, 1, '2024-03-04', 'Les tomates étaient un peu abîmées à l''arrivée.', 140),
(1, 3, '2024-03-03', 'Je suis déçu de la pâte à tartiner, trop sucrée à mon goût.', 200),
(4, 2, '2024-03-03', 'Je recommande vivement ce café, il est délicieux!', 180),
(2, 5, '2024-03-02', 'Le t-shirt est un peu petit, pensez à prendre une taille au-dessus.', 150),
(5, 4, '2024-03-02', 'Je suis satisfait de cet achtat, merci!', 170),
(3, 1, '2024-03-01', 'Les tomates étaient fraîches et bien emballées.', 160),
(1, 2, '2024-03-01', 'La pâte à tartiner est délicieuse, je la rachèterai.', 190),
(4, 3, '2024-02-29', 'Très bon café, je le recommande.', 180),
(2, 5, '2024-02-29', 'Le t-shirt est de bonne qualité.', 150),
(5, 4, '2024-02-28', 'Bon rapport qualité-prix pour ce produit.', 170);

-- insertions de la table ideas

INSERT INTO ideas (authorId, title, content, datePosted) VALUES
(4, 'Initiation à la programmation', 'Proposer des ateliers d''initiation à la programmation pour les étudiants intéressés par l''informatique.', '2024-03-03'),
(5, 'Club de cinéma universitaire', 'Créer un club de cinéma pour visionner et discuter des films cultes chaque semaine.', '2024-03-02'),
(6, 'Journée de la diversité culturelle', 'Organiser une journée spéciale pour célébrer la diversité culturelle sur le campus avec des stands de nourriture, des performances artistiques et des présentations culturelles.', '2024-03-01'),
(7, 'Amélioration de la bibliothèque universitaire', 'Proposer des suggestions pour améliorer les services de la bibliothèque, tels que l''extension des heures d''ouverture et l''ajout de nouvelles ressources.', '2024-02-29'),
(8, 'Projet de jardin communautaire', 'Créer un jardin communautaire où les étudiants peuvent cultiver des légumes biologiques et se détendre en plein air.', '2024-02-28');

-- insertions de la table idea_comments

INSERT INTO idea_comments (authorId, ideaId, datePosted, content) VALUES

(1, 4, '2024-03-04', 'Je pense que c''est une excellente initiative pour encourager la pensée informatique.'),
(2, 5, '2024-03-03', 'Je suis passionné par le cinéma et je soutiens cette proposition.'),
(3, 6, '2024-03-02', 'C''est une idée fantastique pour promouvoir la diversité et l''inclusion.'),
(4, 7, '2024-03-01', 'Je suis d''accord. La bibliothèque pourrait également offrir plus de salles d''étude.'),
(5, 8, '2024-02-29', 'Un jardin communautaire serait un excellent moyen de promouvoir le bien-être et la durabilité.');

-- insertions de la table images_related

INSERT INTO images_related (authorId, eventId, poster, datePosted) 
VALUES
(4, 4, 'coding_workshop.jpg', '2024-03-04'),
(5, 5, 'movie_night.jpg', '2024-03-03'),
(6, 6, 'cultural_day.jpg', '2024-03-02'),
(7, 7, 'library_improvement.jpg', '2024-03-01'),
(8, 8, 'community_garden.jpg', '2024-02-29');

-- insertions de la table image_related_comments

INSERT INTO image_related_comments (authorId, relatedImageId, datePosted, content) 
VALUES
(6, 4, '2024-03-04', 'J''ai hâte de participer à cet atelier de programmation!'),
(7, 5, '2024-03-03', 'Je suis prêt pour une soirée cinéma incroyable.'),
(8, 6, '2024-03-02', 'Les performances culturelles seront-elles ouvertes à tous?'),
(9, 7, '2024-03-01', 'J''espère voir des améliorations dans la bibliothèque bientôt.'),
(10, 8, '2024-02-29', 'Cela semble être un endroit paisible pour se détendre entre les cours.');

