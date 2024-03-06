-- insertions de la table users
INSERT INTO users (firstname, secondname, email, localisation, password, profilePic, status) VALUES
('John', 'Doe', 'john.doe@example.com', 'New York', 'password123', 'profile1.jpg', 1),
('Jane', 'Smith', 'jane.smith@example.com', 'London', 'password456', 'profile2.jpg', 0),
('Michael', 'Johnson', 'michael.johnson@example.com', 'Los Angeles', 'password789', 'profile3.jpg', 1),
('Emily', 'Davis', 'emily.davis@example.com', 'Paris', 'password987', 'profile4.jpg', 0),
('Johmerry', 'Green', 'Johnmerry.Green@example.com', 'Douala', 'password435', 'profile5.jpg', 2);


-- insertions de la tables events
INSERT INTO events (authorId, name, description, datePosted, beginDate, endDate, poster, category, likes, state) VALUES
(1, 'Event 1', 'Description of Event 1', '2024-02-15', '2024-03-01', '2024-03-05', 'poster1.jpg', 'Conference', 10, 'Active'),
(2, 'Event 2', 'Description of Event 2', '2024-02-20', '2024-03-10', '2024-03-12', 'poster2.jpg', 'Workshop', 5, 'Active'),
(4, 'Event 3', 'Description of Event 3', '2024-02-25', '2024-03-15', '2024-03-18', 'poster3.jpg', 'Seminar', 8, 'Inactive'),
(3, 'Event 4', 'Description of Event 4', '2024-03-01', '2024-03-20', '2024-03-22', 'poster4.jpg', 'Webinar', 15, 'Active'),
(4, 'Event 5', 'Description of Event 5', '2024-03-05', '2024-03-25', '2024-03-27', 'poster5.jpg', 'Exhibition', 12, 'Active');

-- insertions de la table products



-- insertions de la table images_related


