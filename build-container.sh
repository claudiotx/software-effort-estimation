#!/bin/sh
set -e
echo "Building a fresh docker image..."
docker build -t see-static .
echo "Checking docker status"
docker ps
# docker run -d -p 3700:3700 --name see-static see-static

