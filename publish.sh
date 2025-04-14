#!/bin/bash

export CI_JOB_TOKEN=$CI_JOB_TOKEN
export CI_PROJECT_NAME=$CI_PROJECT_NAME
export CI_COMMIT_TAG=$CI_COMMIT_TAG
export CI_PROJECT_ID=$CI_PROJECT_ID

curl --header "Authorization: Bearer $CI_JOB_TOKEN" --header "Content-Type: application/json" --request POST --data "{\"package\": {\"name\": \"$CI_PROJECT_NAME\", \"version\": \"$CI_COMMIT_TAG\"}}" https://gitlab.com/api/v4/projects/$CI_PROJECT_ID/packages
curl --header "Authorization: Bearer $CI_JOB_TOKEN" --header "Content-Type: application/octet-stream" --request PUT --data-binary "@$CI_PROJECT_NAME-$CI_COMMIT_TAG.tgz" https://gitlab.com/api/v4/projects/$CI_PROJECT_ID/packages/$CI_PROJECT_NAME/$CI_COMMIT_TAG/$CI_PROJECT_NAME-$CI_COMMIT_TAG.tgz
