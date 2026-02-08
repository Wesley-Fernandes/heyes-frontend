#!/bin/bash
set -e

# Install Docker if not present
if ! command -v docker &> /dev/null; then
    echo "Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    systemctl start docker
    systemctl enable docker
fi

# Load image
echo "Loading image..."
docker load -i heyes-frontend.tar

# Stop existing container
echo "Stopping existing container..."
docker stop heyes-frontend || true
docker rm heyes-frontend || true

# Run new container
echo "Starting container..."
docker run -d \
  --name heyes-frontend \
  --restart unless-stopped \
  -p 80:80 \
  heyes-frontend:latest

echo "Deployment successful!"
