class HealthCheckController < ApplicationController
    def show
      render body: nil, status: 200
    end
end
  