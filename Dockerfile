FROM node:18.12.0-bullseye-slim
RUN apt-get update && apt-get install -y
# Create app directory
WORKDIR /react-app

# Install app dependencies
# '*' -> ensure both package.json AND package-lock.json are copied
COPY package*.json .
RUN npm install --silent
RUN npm install gh-pages-deploy --save-dev
RUN npm install react-scripts --silent

# Bundle app source
# COPY . .

EXPOSE 3000
CMD ["npm", "start"]