-- insertions de la table users
INSERT INTO users (firstname, secondname, email, localisation, password, profilePic, status) VALUES
('John', 'Doe', 'john.doe@example.com', 'New York', 'password123', 'profile1.jpg', 1),
('Jane', 'Smith', 'jane.smith@example.com', 'London', 'password456', 'profile2.jpg', 0),
('Michael', 'Johnson', 'michael.johnson@example.com', 'Los Angeles', 'password789', 'profile3.jpg', 1),
('Emily', 'Davis', 'emily.davis@example.com', 'Paris', 'password987', 'profile4.jpg', 0);
('Jessica', 'Brown', 'jessica.brown@example.com', 'Berlin', 'password321', 'profile5.jpg', 1);

-- insertions de la tables events
INSERT INTO events (authorId, name, description, datePosted, beginDate, endDate, poster, category, likes, state) VALUES
(1, 'Event 1', 'Description of Event 1', '2024-02-15', '2024-03-01', '2024-03-05', 'poster1.jpg', 'Conference', 10, 'Active'),
(2, 'Event 2', 'Description of Event 2', '2024-02-20', '2024-03-10', '2024-03-12', 'poster2.jpg', 'Workshop', 5, 'Active'),
(4, 'Event 3', 'Description of Event 3', '2024-02-25', '2024-03-15', '2024-03-18', 'poster3.jpg', 'Seminar', 8, 'Inactive'),
(3, 'Event 4', 'Description of Event 4', '2024-03-01', '2024-03-20', '2024-03-22', 'poster4.jpg', 'Webinar', 15, 'Active'),
(4, 'Event 5', 'Description of Event 5', '2024-03-05', '2024-03-25', '2024-03-27', 'poster5.jpg', 'Exhibition', 12, 'Active');

-- insertions de la table products



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

INSERT INTO images_related (authorId, eventId, poster, datePosted) VALUES
    (4, 4, 'coding_workshop.jpg', '2024-03-04'),
    (5, 5, 'movie_night.jpg', '2024-03-03'),
    (6, 6, 'cultural_day.jpg', '2024-03-02'),
    (7, 7, 'library_improvement.jpg', '2024-03-01'),
    (8, 8, 'community_garden.jpg', '2024-02-29');

-- insertions de la table image_related_comments

INSERT INTO image_related_comments (authorId, relatedImageId, datePosted, content) VALUES
    (6, 4, '2024-03-04', 'J''ai hâte de participer à cet atelier de programmation!'),
    (7, 5, '2024-03-03', 'Je suis prêt pour une soirée cinéma incroyable.'),
    (8, 6, '2024-03-02', 'Les performances culturelles seront-elles ouvertes à tous?'),
    (9, 7, '2024-03-01', 'J''espère voir des améliorations dans la bibliothèque bientôt.'),
    (10, 8, '2024-02-29', 'Cela semble être un endroit paisible pour se détendre entre les cours.');



