BEGIN;

INSERT INTO "employee_qualification" ("label")
VALUES
('Cariste'),
('Electricien'),
('Plombier'),
('Automaticien'),
('Maçon'),
('Manager');


INSERT INTO "absence" ("reason")
VALUES
('Maladie'),
('Accident du travail'),
('Visite médicale'),
('Formation interne'),
('Formation externe'),
('Congés'),
('Congés parental');

INSERT INTO "employee" ("social_security_number","firstname","lastname","date_of_birth","address","zip_code","email","phone_number","mobile_number","password","avatar","fonction","role_application","employee_qualification_id")
VALUES
(214119530380949,'Jelani','Andy','1990-06-22 02:23:17','2448 Orci Street',31000,'j.andy@protonmail.com','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/66.jpg','Technicien','user',4),
(135154011033519,'Mufutau','Vincent','1990-06-20 22:03:09','464-6625 Turpis Av.',31000,'vincent-mufutau@yahoo.edu','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/32.jpg','Responsable équipe','user',2),
(135015736974052,'Hop','Gilles','1990-07-03 07:10:08','248-4810 Nunc Avenue',31000,'gilles_hop@outlook.edu','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/63.jpg','Cadre','user',2),
(148183378207342,'William','Maxime','1990-03-25 00:07:34','Ap #164-7462 Quisque Rd.',31000,'maximewilliam@hotmail.couk','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/54.jpg','Technicien Electrique','user',3),
(213134607087912,'Caleb','Xavier','1990-02-03 11:00:23','P.O. Box 728, 8256 Molestie Avenue',31000,'xavier_caleb4493@yahoo.edu','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/91.jpg','Maçon','admin',6),
(218134681374272,'William','Thibaut','1990-05-14 20:49:18','Ap #675-2785 Duis St.',31000,'thibautwilliam@yahoo.ca','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/33.jpg','Ouvrier','user',2),
(131195282492822,'Palmer','Lucas','1990-05-15 07:39:54','P.O. Box 688, 8413 Libero. Street',31000,'l.palmer1751@outlook.net','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/98.jpg','Cadre','user',2),
(227174725448992,'Caleb','Aurélien','1990-06-22 06:47:34','Ap #529-7467 Praesent Avenue',31000,'aurliencaleb3012@hotmail.ca','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/50.jpg','Technicien automatisme','user',2),
(228113314378012,'Leonard','Yannick','1990-05-25 16:09:28','8445 Nunc St.',31000,'y_leonard1597@protonmail.couk','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/03.jpg','Stagiaire','user',5),
(220129564171002,'Harding','Robin','1990-06-13 20:59:04','2846 Pharetra Avenue',31000,'robin.harding5490@google.edu','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/44.jpg','Alternant','user',5),
(197064003640332,'Joshua','Adrien','1990-05-06 13:39:59','Ap #551-5627 Aenean Street',31000,'joshuaadrien@hotmail.couk','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/77.jpg','Conducteur d`engins','user',5),
(221111422427112,'Brady','Andy','1990-05-16 10:52:29','8934 Vivamus Rd.',31000,'andybrady8712@aol.ca','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/33.jpg','Cadre','user',2),
(147118699561442,'Luke','Clement','1990-06-07 22:56:44','883-2732 Lobortis Road',31000,'clement.luke2929@yahoo.ca','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/78.jpg','Technicien Electrique','user',3),
(206177429172552,'Elvis','Cyril','1990-03-12 06:14:18','622-2285 Varius Av.',31000,'ecyril200@icloud.com','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/92.jpg','Cadre','user',1),
(225130800628642,'Kasper','Arthur','1990-02-26 19:49:41','Ap #876-6499 Neque. Rd.',31000,'karthur1138@yahoo.couk','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/29.jpg','Technicien','user',5),
(158176200238672,'Denton','William','1990-02-19 03:37:54','4255 Elit, Rd.',31000,'williamdenton@protonmail.couk','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/89.jpg','Technicien Electrique','user',3),
(183197723210632,'Wylie','Benoît','1990-07-05 16:44:18','240-9317 Risus Street',31000,'wyliebenot3325@outlook.couk','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/63.jpg','Cadre','user',1),
(222122731259632,'Sylvester','Valentin','1990-04-09 03:55:35','Ap #374-4540 Arcu St.',31000,'v-sylvester@outlook.net','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/57.jpg','Technicien Electrique','user',2),
(137185514175412,'Malachi','Tristan','1990-06-05 13:07:12','9184 Fringilla St.',31000,'malachi.tristan@icloud.couk','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/55.jpg','Technicien Electrique','user',5),
(137185514172632,'Prescott','Geoffrey','1990-06-13 03:47:00','Ap #488-2475 Turpis St.',31000,'g.prescott2267@google.net','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/48.jpg','Chef de projet','user',3),
(184039935083962,'Ashton','Alexandre','1990-04-23 20:22:20','P.O. Box 218, 4683 Auctor Av.',31000,'alexandre-ashton5369@icloud.edu','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/67.jpg','Cadre','user',3),
(184039935081402,'Guillemot','Ben','1990-04-23 20:22:20','P.O. Box 218, 4683 Auctor Av.',59230,'ben@olleks.com','0561166116','0612996601','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/67.jpg','Cadre','admin',3),
(184039935081412,'Tassel','Pascal','1990-04-23 20:22:20','P.O. Box 218, 4683 Auctor Av.',58000,'pascal@olleks.com','0561166116','0612996612','$2a$10$jgwrrBeSJ0eszEOApaz7G.JBc6ZwruwO9CTcBRBhkv9MQQwE/arCu','/images/67.jpg','Cadre','admin',3),
(184039935081422,'Lebreton','Mathieu','1990-04-23 20:22:20','P.O. Box 218, 4683 Auctor Av.',27000,'mathieu@olleks.com','0561166116','0612996622','$2a$10$iLx5yShSPLV7L6cCunO8MexjZqP4e7MyJ7klo7/2d/TG/V8d2v3va','/images/67.jpg','Cadre','admin',3),
(184039935081432,'Devémy','Jordane','1990-04-23 20:22:20','P.O. Box 218, 4683 Auctor Av.',34200,'jordane@olleks.com','0561166116','0612996633','$2a$10$EVotY6TxAjnkmTt72R/evuuQngvPSp8pwE6sCOkKvIGtPU.7yo0m6','/images/67.jpg','Technicien','user',3),
(184039935081442,'Chrita','hicham','1990-04-23 20:22:20','P.O. Box 218, 4683 Auctor Av.',31600,'hicham@olleks.com','0561166116','0612996644','$2a$10$unUP/xKV1EMVTNWnMUsAjuJtNjPQb/lHWafDMsfhJgG7jS8SSO1vO','/images/67.jpg','Cadre','user',3),
(184039935084862,'Olleks','Developpeur','1990-04-23 20:22:20','P.O. Box 218, 4683 Auctor Av.',31000,'olleks.planning@gmail.com','0561166116','0612996644','$2a$10$gyK1BhKje67jucWfvC7WJOtpIUoUQK/fpRh5KYcRUirrpQMK7uHAe','/images/67.jpg','Chef de chantier','admin',3);

INSERT INTO "company" ("name","address","zip_code","type")
VALUES
('EDF','Ap #155-3218 Lacinia Street',19796,'Client'),
('SNCF','Ap #793-4849 Luctus. Av.',15092,'Client'),
('Lapeyre','2119 Eu Road',15041,'Client'),
('Nestlé','Ap #923-3721 Aliquet, Rd.',4754,'Client'),
('Darty','Ap #676-1455 Primis Ave',19252,'Client'),
('Manpower','Ap #189-5565 Id, Rd.',19829,'Fournisseur'),
('Addeco','3291 Non St.',9034,'Fournisseur');

INSERT INTO "site" ("name","address","zip_code","manager_name","estimated_duration","company_id")
VALUES

('Centrale Moulin à vent','P.O. Box 356, 7431 Dignissim Ave',31398,'Sandra Langlais',180,1),
('Centrale Vapeur','P.O. Box 580, 1705 Nibh. Road',31007,'Ali Segal',80,1),
('Centrale Incendie','809-1532 Sed Rd.',31293,'Wallace Dam',220,1),
('Gare St-Lazare','490-3123 Felis. Rd.',31051,'Ima Heeren',120,2),
('Gare du Nord','P.O. Box 884, 3992 Ornare Avenue',31375,'Brenden Bouwmeester',160,2),
('Gare Montparnasse','P.O. Box 921, 5917 Feugiat St.',31080,'Griffin Bakhuizen',160,2),
('Gare Matabiau','101-6775 Fringilla, Rd.',31060,'Bruce Plamondon',150,2),
('Gomez & DuBois','P.O. Box 723, 9547 Magna. Ave',31017,'Noelle Haak',8,3),
('B.LaPorte','926-6489 Et, Street',31220,'Kyla Bouwmeester',9,3),
('Site Nestmilk','956 Nunc. Av.',31094,'Miriam Fabre',5,4),
('Site Lait concentré','451-1631 Eu Rd.',31113,'Rhonda Koopman',9,4),
('Yoplait','P.O. Box 175, 791 In Av.',31443,'Gannon Achthoven',4,4),
('DirtySite','Ap #789-8556 Etiam Street',31254,'Amela Van Alphen',20,5),
('DartyDancing','162-5918 Porta Ave',31362,'Ocean Kloet',9,5),
('Manpower Lille','351-8794 A, Ave',31349,'Abraham Savatier',7,6),
('Addeco Lille','P.O. Box 536, 2869 Mus. Street',31020,'Hillary Aaldenberg',6,7);

INSERT INTO "assignment" ("starting_date","ending_date","color","employee_id","absence_id","site_id")
VALUES
('2022-03-07 00:00:00+00','2022-03-13 00:00:00+00','#f27674',1,null,1),
('2022-03-07 00:00:00+00','2022-03-13 00:00:00+00','#528e08',2,null,1),
('2022-03-07 00:00:00+00','2022-03-13 00:00:00+00','#73b0d6',3,null,1),
('2022-03-07 00:00:00+00','2022-03-13 00:00:00+00','#e2ab6f',4,null,2),
('2022-03-07 00:00:00+00','2022-03-13 00:00:00+00','#156170',5,null,2),
('2022-03-07 00:00:00+00','2022-03-13 00:00:00+00','#156170',13,1,null),
('2022-03-07 00:00:00+00','2022-03-13 00:00:00+00','#156170',14,3,null),
('2022-03-07 00:00:00+00','2022-03-13 00:00:00+00','#3003a3',6,null,2),
('2022-03-07 00:00:00+00','2022-03-13 00:00:00+00','#0233e5',7,null,2),
('2022-03-07 00:00:00+00','2022-03-09 00:00:00+00','#e05cc1',8,null,3),
('2022-03-07 00:00:00+00','2022-03-13 00:00:00+00','#5a0a82',9,null,4),
('2022-03-07 00:00:00+00','2022-03-13 00:00:00+00','#1244ba',10,null,4),
('2022-03-07 00:00:00+00','2022-03-13 00:00:00+00','#5c1ebf',20,null,3),
('2022-03-07 00:00:00+00','2022-03-13 00:00:00+00','#02cce2',21,null,3),
('2022-03-07 00:00:00+00','2022-03-13 00:00:00+00','#a252d3',22,null,3),
('2022-03-14 00:00:00+00','2022-03-20 00:00:00+00','#15A170',18,3,null),
('2022-03-14 00:00:00+00','2022-03-20 00:00:00+00','#84C170',19,2,null),
('2022-03-14 00:00:00+00','2022-03-20 00:00:00+00','#b8c63b',11,null,5),
('2022-03-14 00:00:00+00','2022-03-20 00:00:00+00','#4616bf',12,null,5),
('2022-03-14 00:00:00+00','2022-03-20 00:00:00+00','#5c1ebf',13,null,6),
('2022-03-14 00:00:00+00','2022-03-20 00:00:00+00','#02cce2',14,null,7),
('2022-03-14 00:00:00+00','2022-03-20 00:00:00+00','#f274bd',15,null,7),
('2022-03-14 00:00:00+00','2022-03-20 00:00:00+00','#bfd3fc',16,null,8),
('2022-03-14 00:00:00+00','2022-03-20 00:00:00+00','#2961b5',1,null,8),
('2022-03-14 00:00:00+00','2022-03-20 00:00:00+00','#02cce2',2,null,8),
('2022-03-14 00:00:00+00','2022-03-20 00:00:00+00','#81f997',3,null,9),
('2022-03-14 00:00:00+00','2022-03-20 00:00:00+00','#81f997',4,null,10),
('2022-03-14 00:00:00+00','2022-03-20 00:00:00+00','#9ee21f',5,null,10),
('2022-03-14 00:00:00+00','2022-03-20 00:00:00+00','#a252d3',6,null,11),
('2022-03-14 00:00:00+00','2022-03-20 00:00:00+00','#1244ba',7,null,11),
('2022-03-14 00:00:00+00','2022-03-20 00:00:00+00','#b8c63b',8,null,11),
('2022-03-21 00:00:00+00','2022-03-27 00:00:00+00','#4616bf',17,null,12),
('2022-03-14 00:00:00+00','2022-03-27 00:00:00+00','#5c1ebf',18,null,12),
('2022-03-14 00:00:00+00','2022-03-27 00:00:00+00','#02cce2',19,1, null),
('2022-03-14 00:00:00+00','2022-03-27 00:00:00+00','#f274bd',20,null,13),
('2022-03-14 00:00:00+00','2022-03-27 00:00:00+00','#bfd3fc',21,2,null),
('2022-03-14 00:00:00+00','2022-03-27 00:00:00+00','#2961b5',9,null,14),
('2022-03-14 00:00:00+00','2022-03-27 00:00:00+00','#02cce2',10,null,15),
('2022-03-14 00:00:00+00','2022-03-27 00:00:00+00','#b8c63b',11,null,15),
('2022-03-14 00:00:00+00','2022-03-27 00:00:00+00','#81f997',12,null,15),
('2022-03-14 00:00:00+00','2022-03-27 00:00:00+00','#a252d3',13,null,16),
('2022-03-14 00:00:00+00','2022-03-27 00:00:00+00','#b8c63b',14,null,16),
('2022-03-14 00:00:00+00','2022-03-27 00:00:00+00','#c0a9f2',15,null,16);

INSERT INTO "contact" ("email","firstname","lastname","mobile_number","fonction","company_id")
VALUES
('burton_harriet5889@edf.com','Harriet','Burton','0602182411','Assistant_technique',1),
('j_keaton@sncf.fr','Jenette','Keaton','0702182422','Responsable_maintenance',2),
('h_tyrone@lapeyre.fr','Hammett','Tyrone','0692182433','Manager',3),
('scarlet-nina7769@darty.fr','Nina','Scarlet','0682182444','Chef_de_projet',4),
('s_nelle3590@nestle.com','Nelle','Sharon','0652182455','Directeur',5),
('alice_sarah6982@manpower.fr','Alice','Sarah','0602182466','Responsable_maintenance',6),
('dantegarth@addeco.com','Garth','Dante','0602180077','Responsable_de_production',7);

INSERT INTO "employee_contract" ("type_of_contract","starting_date","company_id","employee_id")
VALUES
('CDI','2021-08-21 00:08:46',null,1),
('CDD','2021-10-12 07:41:54',null,2),
('CDI','2021-08-30 11:39:28',null,3),
('CDI','2021-12-12 07:15:06',null,4),
('CDD','2021-05-09 07:00:43',null,5),
('CDD','2021-07-19 04:31:39',null,6),
('CDI','2021-07-12 00:05:46',null,7),
('CDI','2021-12-13 05:09:16',null,8),
('CDI','2021-04-12 11:23:41',null,9),
('CDD','2021-08-09 22:55:38',null,10),
('CDI','2021-12-10 18:16:54',null,11),
('CDD','2021-12-15 01:53:03',null,12),
('CDI','2021-01-02 18:17:58',null,13),
('CDD','2021-05-28 10:37:33',null,14),
('CDI','2021-11-13 16:45:24',null,15),
('CDD','2021-03-17 02:56:13',null,16),
('CDD','2021-09-10 15:25:23',null,17),
('CDD','2021-11-21 12:52:37',null,18),
('Intérim','2022-03-01 10:01:35',6,19),
('Intérim','2022-03-01 18:32:12',6,20),
('Intérim','2022-03-01 19:41:06',7,21);

COMMIT;
