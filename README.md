# docker-rest-websockets (Django/Livereload)

Example sending messages between server and client using:
* Docker
* Django
* django-channels

## Installation

Ensure you have Docker installed using the instructions at:

[https://www.docker.com/products/docker](https://www.docker.com/products/docker)

Build using docker-compose:

    docker-compose build


## Usage

Run all the services together using:

    docker-compose up

Then visit the backend service:

    http://localhost:3000/


## Docker (optional)

If you like, you can use docker directly using:

    cd backend
    docker build -t docker-rest-websockets .
    docker run -it -p 8888:8080 docker-rest-websockets

You can remove all previous images using:

    docker images -q | xargs docker rmi -f


## Directory structure

    backend/                        --> Backend serving html
    frontend/                       --> Frontend sources files


## Contact

For more information please contact kmturley