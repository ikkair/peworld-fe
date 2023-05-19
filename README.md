<br />
<p align="center">
  <div align="center">
    <img height="150" src="#" alt="Peworld" border="0"/>
  </div>
  <h3 align="center">Hirejob (Hiring App)</h3>
  <p align="center">
    <a href="https://github.com/ikkair/peworld-fe"><strong>Explore the docs »</strong></a>
    <br />
    <a href="#">View Demo</a>
    ·
    <a href="#">Api Demo</a>
  </p>
</p>

## Table of Contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Screenshots](#screenshots)
- [Related Project](#related-project)

# About The Project

Peworld is a hiring website to make it easier to connect workers with recruiters. Workers can create an account and display portfolios, work experiences, and skills on this website. Recruiters can create an account for searching and hiring workers based on company needs. Workers will be notified if they are hired by recruiter.

## Built With

These are the libraries and service used for building this backend API

- [NextJS](https://nextjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- [React-icons](https://react-icons.github.io/react-icons/)
- [Axios](https://axios-http.com)
- [Sweetalert2](https://sweetalert2.github.io)

# Getting Started

## Prerequisites

You'll need these programs installed before proceeding to installation

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/en/download)

This project requires [peworld-be](https://github.com/ikkair/peworld-be) to function properly, follow the steps provided in the readme to install and run the backend API

## Installation

Follow this steps to run the server locally

1. Clone this repository

```sh
git clone https://github.com/ikkair/peworld-fe.git
```

2. Change directory to hirejob-frontend

```sh
cd peworld-fe
```

3. Install all of the required modules

```sh
npm install
```

4. Create and configure `.env.local` file in the root directory, example env are provided in [.env.local.example](./.env.local.example)

```env
NEXT_PUBLIC_HOST=[ Backend URL ]
```

5. Run this command to run the server in development environment

```sh
npm run start
```

- Run this command to build this website into production ready

```sh
npm run build
```

# Screenshots

<table>
 <tr>
    <td><img width="350px" src="./public/docs/Peworld Login.png" border="0" alt="Login" /></td>
    <td> <img width="350px" src="./public/docs/Peworld Register.png" border="0"  alt="Register" /></td>
  </tr>
  <tr>
    <td>Login</td>
    <td>Register</td>
  </tr>
  <tr>
    <td><img width="350px" src="./public/docs/Peworld Landing.png" border="0" alt="Landing" /></td>
    <td><img width="350px" src="./public/docs/Peworld Edit Profile.png" border="0" alt="Profile" /> </td>
  </tr>
   <tr>
    <td>Landing Page</td>
    <td>Edit Profile</td>
  </tr>
  <tr>
    <td><img width="350px" src="./public/docs/Peworld Search.png" border="0" alt="Search" /></td>
    <td><img width="350px" src="./public/docs/Peworld Detail Talent.jpg" border="0" alt="Detail Talent" /> </td>
  </tr>
   <tr>
    <td>Search</td>
    <td>Detail Talent</td>
  </tr>
  <tr>
    <td><img width="350px" src="./public/docs/Peworld Experience.png" border="0" alt="Experience" /></td>
    <td><img width="350px" src="./public/docs/Peworld Hire.png" border="0" alt="Hire" /> </td>
  </tr>
   <tr>
    <td>Experience</td>
    <td>Hire</td>
  </tr>
</table>

# Related Project

:rocket: [`Frontend Peworld`](https://github.com/ikkair/peworld-fe)

:rocket: [`Backend Peworld`](https://github.com/ikkair/peworld-be)

:rocket: [`Demo Peworld`](#)
