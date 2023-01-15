# Use the official Ruby image as the base image
FROM ruby:2.7.4

# Set the working directory
WORKDIR /app

# Install NodeJS and npm
RUN apt-get update && apt-get install -y nodejs npm

# Copy the Gemfile and Gemfile.lock into the container
COPY Gemfile Gemfile.lock ./

# Install the required gems
RUN bundle install

# Copy the rest of the application code into the container
COPY . .

# Build React app
RUN cd client && npm install && npm run build

# Expose the port that the application will run on
EXPOSE 3000

# Start the Rails server
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
