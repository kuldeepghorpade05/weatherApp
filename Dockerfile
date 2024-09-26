# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /home/app

# Copy package.json and package-lock.json first to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other files and folders to the container
COPY . .

# Expose port 9000 (or the one your app uses)
EXPOSE 9000

# Start the Node.js server
CMD ["npm", "start"]
