FROM python:3.6
ENV PYTHONUNBUFFERED 1

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
ADD requirements.txt /usr/src/app
RUN pip install -r requirements.txt

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000
CMD ["python", "server.py"]