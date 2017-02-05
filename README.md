# docker-rest-websockets (Python)

Example sending messages between server and client using:
* Docker
* Python
* python-websockets

## Installation

Build using docker-compose:

    docker-compose build


## Usage

Run all the services together using:

    docker-compose up

Then visit the frontend service:

    http://localhost:3001/

Running the services separately on your local machine:

    cd backend
    pip install -r requirements
    python3 server.py

    cd frontend
    npm install
    npm start


## Docker (optional)

If you like, you can use docker directly using:

    cd backend
    docker build -t docker-rest-websockets .
    docker run -it -p 8888:8080 docker-rest-websockets

You can remove all previous images using:

    docker images -q | xargs docker rmi -f
    docker-compose rm


## Directory structure

    backend/                        --> Backend Messages API
    frontend/                       --> Static frontend files


## Contact

For more information please contact kmturley