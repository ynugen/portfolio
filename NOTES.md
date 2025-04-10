# This Project's Tech Stack

Programming languages:

- Typescript
- Java

Frameworks:

- Next.js
- Springboot

Database:

Frontend tools:

Backend tools:

APIs:

_25/11/2024_

## Setting up the Repository

My project will be created using a Next.js frontend and a Springboot backend. Because I set both folders in the same repository, I realise that it would be super helpful for me to have a docker-compose file that configures and runs both servers with a single command. I'm using the docker website, other github repo examples, and chatGPT to help me understand what the heck I am writing.

Dockerfiles are to define then environment of a single container wherease the docker-compose.yml defines how those environments interact with each other. To be able to successfully run these files. I will need to write an API for the frontend to be able to pull from the backend. Alas, that might be tomorrow or another day.

_10/04/2024_

## Restarting my Repository

I decided that I want to publish my portfolio onto github pages and get rid of the backend (I personally don't need a separate server to add stuff onto my portfolio as I can just input it into the code). Was able to get the GitHub Actions working for Next.Js -> Static export (in which I initially struggled with fixing the image paths and css paths) with this [youtube video](https://www.youtube.com/watch?v=mJuz45RXeXY) and fix my TailWindCSS errors with this [stackoverflow post](https://stackoverflow.com/questions/70506975/issues-installing-tailwindcss-specifically-with-npx-tailwindcss-init). This took me quite a while to do T^T. However, my sidebar is now working!! I'm designing what I want my pages to look like on Figma, and I love how its looking at the moment deployed! Still very much a work in progress but I'm excited!
