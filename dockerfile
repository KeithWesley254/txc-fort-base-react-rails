# Use the official Ruby image as the base image
FROM ruby:2.7.4

# Set the working directory
WORKDIR /app

# Copy the Gemfile and Gemfile.lock into the container
COPY Gemfile Gemfile.lock ./

# Install the required gems
RUN bundle install

# Expose the port that the application will run on
EXPOSE 1177

# Start the Rails server
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
