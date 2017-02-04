# express-docker-api

Example sending messages between server and client using:
* ExpressJS
* Socket.io
* Docker

## Installation

Install the Amazon Elastic Beanstalk Client

    docker-compose build


## Usage

Run the server locally using docker-compose:

    docker-compose up

Then visit the address:

    http://localhost:3001/


## Docker (optional)

If you like, you can use docker directly using:

    docker build -t express-docker .
    docker run -it -p 8888:8080 express-docker

You can remove all previous images using:

    docker images -q | xargs docker rmi -f


## Directory structure

    backend/                        --> Backend Messages API
    frontend/                       --> Static frontend files


## Contact

For more information please contact kmturley