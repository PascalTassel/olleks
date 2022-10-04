# O'lleks

A planning handling tool allowing registered users to either manage their staff and create plannings, or recover affectations informations depending on their status.
<!-- Un outil de gestion de planning permettant à des utilisateurs enregistrés de gérer leurs effectifs et de créer des plannings, ou de récupérer des affectations selon leur statut. -->

## Features

(Depending on the status)

- Global display of every sites and employees (sorted weekly)
- Re-affectation of an employee with a **drag&drop** system (Desktop only)
- Possibility of creating plannings for following weeks
- Creation, update and deletion of an employee, site or a company
- Absence management
- Archive system
- Responsive design: accessible on any devices
- Light mode, dark mode

<!-- (Selon le statut)

- Vision globale de tous les sites et de tous les employés (à la semaine)
- Affectation d'un employé avec un système de **drag&drop** (sur bureau)
- Possibilité dé créer des plannings pour les semaines suivantes
- Création, modifications et suppression d'un employé, d'un site ou d'un client
- Gestion des absences
- Système d'archive
- Design responsive, accessible sur tous les supports
- Mode clair, mode sombre -->

## Lexicon

School project developped to answer the needs of a specific company who still uses T-sheets paper planners, the terms and uses of the application are specific to said company. Here's a quick rundown:

- ```admin``` A role given upon registration to the users in charge of affecting an employee to a production site. Their permissions allow them to create, update or delete an affectation, an employee, a production site or a company.
- ```user``` A role given upon registration to the employees of the company. Their permissions allow them to consult their weekly plannings.
- ```employee``` Any employee of the company using the application.
- ```site``` The production sites the company using the application are operating *(or operated)* on. Production sites belong to a company.
- ```client/company``` All the companies the company using the application are working *(or worked)* with.

<!-- Un projet d'étude développé pour répondre aux besoins spécifiques d'une entreprise particulière, qui utilise à ce jour toujours un système de planning en fiche en T, les termes et l'utilisation utilisés pour l'application sont spécifiques à la dite entreprise. Voici un rapide lexique :

- ```admin``` Un rôle attribué à l'enregistrement à l'utilisateur en charge d'affecter un employé à un site de production. Leurs permissions leurs permettent de créer, modifier et supprimer une affectation, un employé, un site ou une entreprise.
- ```user``` Un rôle attribué à l'enregistrement à un employé de l'entreprise. Leurs permissions leurs permettent de consulter leur planning hebdomadaire.
- ```employee``` Tous les employés de l'entreprise utilisant l'application.
- ```site``` Tous les sites de production sur lesquels l'entreprise utilisant l'application opère *(ou a opéré)*. Un site appartient à une entreprise.
- ```client/company``` Toutes les entreprises avec lesquelles l'entreprise utilisant l'application travaille *(ou a travaillé)*. -->

## Technologies

Built with **React**, **React-Redux**, and **Material UI**. Runs on **NodeJs**, with our database hosted on **Heroku**.

<!-- Construit avec **React**, **React-Redux** et **Material UI**. Tourne sur **NodeJs**, avec notre base de données hébergée sur **Heroku**. -->

## Setup

After cloning, to install the project's dependencies :

```nodejs
cd server/
npm i
npm run dev

cd client/
yarn
yarn start
```

Using ```npm run dev``` to start the server and ```yarn start``` to launch the React website, you'll then have access to the application via your localhost:3000.

<!-- Après le clone, pour installer les dépendances du projet :

```nodejs
cd server/
npm i
npm run dev

cd client/
yarn
yarn start
```

Utilisez ```npm run dev``` pour lancer le serveur et ```yarn start``` pour lancer l'application React, vous aurez ensuite accès au site via votre localhost:3000. -->
