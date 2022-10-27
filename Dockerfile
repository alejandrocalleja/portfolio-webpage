FROM node:18.12

# Create app directory
WORKDIR /react-app

# Install app dependencies
# '*' -> ensure both package.json AND package-lock.json are copied
COPY package*.json .
RUN npm install --silent

# Bundle app source
COPY . .

EXPOSE 3000
CMD ["npm", "start"]