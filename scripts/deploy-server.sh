#!/bin/bash

# env:
# PORT - allow on ufw
# DEPLOY_PORT - allow on ufw
# DEPLOY_TOKEN

docker run -d -p $PORT:4000 gerilm/node-cicd-deploy;

sudo docker run -d \
	-p $DEPLOY_PORT:8080 \
	-e WATCHTOWER_HTTP_API_TOKEN=$DEPLOY_TOKEN \
	--label com.centurylinklabs.watchtower.enable=false \
	-v /var/run/docker.sock:/var/run/docker.sock \
	containrrr/watchtower --debug --http-api-update --cleanup