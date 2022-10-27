FROM node:18.12

# Create app directory
WORKDIR /usr/src/app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
# '*' -> ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "start" ]