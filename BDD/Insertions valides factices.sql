-- insertions de la table users
INSERT INTO users (firstname, secondname, email, localisation, password, profilePic, status) 
VALUES
('John', 'Doe', 'john.doe@example.com', 'New York', 'password123', 'profile1.jpg', 1),
('Jane', 'Smith', 'jane.smith@example.com', 'London', 'password456', 'profile2.jpg', 0),
('Michael', 'Johnson', 'michael.johnson@example.com', 'Los Angeles', 'password789', 'profile3.jpg', 1),
('Emily', 'Davis', 'emily.davis@example.com', 'Paris', 'password987', 'profile4.jpg', 0),
('Johmerry', 'Green', 'Johnmerry.Green@example.com', 'Douala', 'password435', 'profile5.jpg', 2);


-- insertions de la tables events
INSERT INTO events (authorId, name, description, datePosted, beginDate, endDate, poster, category, likes, state) 
VALUES
(1, 'Event 1', 'Description of Event 1', '2024-02-15', '2024-03-01', '2024-03-05', 'poster1.jpg', 'Conference', 10, 'Active'),
(2, 'Event 2', 'Description of Event 2', '2024-02-20', '2024-03-10', '2024-03-12', 'poster2.jpg', 'Workshop', 5, 'Active'),
(4, 'Event 3', 'Description of Event 3', '2024-02-25', '2024-03-15', '2024-03-18', 'poster3.jpg', 'Seminar', 8, 'Inactive'),
(3, 'Event 4', 'Description of Event 4', '2024-03-01', '2024-03-20', '2024-03-22', 'poster4.jpg', 'Webinar', 15, 'Active'),
(4, 'Event 5', 'Description of Event 5', '2024-03-05', '2024-03-25', '2024-03-27', 'poster5.jpg', 'Exhibition', 12, 'Active');

-- insertions de la table products
INSERT INTO products (name, poster, category, description, quantity, sale, price, grade, likes)
VALUES
("Tomate","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWA2r1QM8bWyC6QVHdCjlPA-vYaXOi0bSFdIItv2SFp7XuRCgUwze87Af7JM0q7yF23n0&usqp=CAU","fruits","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto quibusdam, voluptas odit illo dolore.",70,true,150,4,521),
("Pâte à tartiner Tartina","https://boulangerielapaix.com/wp-content/uploads/2021/01/ChocolatsPlan-de-travail-2.jpg","déjeuner","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto quibusdam, voluptas odit illo dolore.",50,false,1600,3.5,1150),
("Dosette de café Nescafé","https://www.nestleprofessional.fr/sites/default/files/styles/np_product_detail/public/2022-08/nescafe_selection_dose_litre_de_15%20g.png?itok=8fjy-IqK","déjeuner","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto quibusdam, voluptas odit illo dolore.",100,false,150,3,225),
("Rouleau de papier toilette","https://zerodechet-tours.fr/85-large_default/rouleau-papier-toilette-a-l-unite-ecolabel-300-ff.jpg","hygiène","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto quibusdam, voluptas odit illo dolore.",30,true,400,5,215),
("T-shirt ICAM AFRIQUE","https://www.mrporter.com/variants/images/3633577411310824/in/w2000_q60.jpg","goodies","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto quibusdam, voluptas odit illo dolore.",25,false,2500,3.5,800),
("Pain de mie","https://ileauxepices.com/blog/wp-content/uploads/2014/02/pains-au-lait.jpg","déjeuner","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto quibusdam, voluptas odit illo dolore.",60,false,125,5,689),
("Bracelet ICAM-AFRIQUE","https://www.bracelets-tendances.fr/wp-content/uploads/2022/11/bracelet-homme-cuir-cinq-rangs-marron-fermoir-acier-argent-quintus.jpg","goodies","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis iusto quibusdam, voluptas odit illo dolore.",23,false,500,0,0);



-- insertions de la table images_related


