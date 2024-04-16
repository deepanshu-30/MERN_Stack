**MERN Stack Base Image**

This repository provides a base Docker configuration for setting up a development environment using the MERN stack (MongoDB, Express.js, React.js, Node.js). It simplifies the process of getting started with developing full-stack JavaScript applications.

**Getting Started**

Prerequisites
Ensure you have Docker and Docker Compose installed on your system. You can download them from the following links:

`Docker`

`Docker Compose`

**Clone the Repository** 

Clone this repository to your local machine:

`git clone https://github.com/deepanshu-30/MERN_Stack_Base-Image`

`cd MERN_Stack_Base-Image`

**Build and Run Containers**

Build the Docker images and start the containers:

`docker-compose build`

`docker-compose up -d`

**Building the Images Separately**

If you need to build any image separately, use the following command:

`docker build -f Dockerfile -t react-app .`

**Running the Image Separately**

To run a built image independently:

`docker run -p 3000:3000 react-app`

**Accessing a Container**

To access a running container, first find the container's ID or name:

`docker ps`

Then, use the following command to enter the container:

`docker exec -it <container-id> sh`

Viewing Container Logs

To follow the logs of a container:

`docker logs -f <container-id>`

License

This project is licensed under the MIT License - see the LICENSE.md file for details.
