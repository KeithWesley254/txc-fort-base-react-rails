#!/usr/bin/env bash
# exit on error
set -o errexit

bundle install
bundle exec rake db:drop db:migrate RAILS_ENV=production
bundle exec rake db:seed