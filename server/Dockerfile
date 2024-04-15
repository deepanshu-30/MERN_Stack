FROM node:20.11.0

# Set working directory
RUN mkdir -p /server/app
WORKDIR /server/app

# Copy package.json and package-lock.json if available
COPY /package*.json ./

# Installing dependencies
RUN npm install -g nodemon
RUN npm install

# Copying source files
COPY . .

# Expose port and start application
EXPOSE 8000
CMD ["npm", "run", "dev"]
