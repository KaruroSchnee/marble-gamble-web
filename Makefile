.PHONY: venv
.EXPORT_ALL_VARIABLES:

## APP VARS ##
PRODUCT_NAME      = marble-gamble
APP_NAME          = web
DOCKER_NETWORK    ?= $(PRODUCT_NAME)_network
DOCKER_USER 	  ?= node:node
TIME_ZONE		  = America/Lima

## GENERAL VARS ##
ENV               ?= dev
NODE_ENV          ?= local
STAGE             ?= $(ENV)
PROJECT_NAME      = $(PRODUCT_NAME)-$(ENV)-$(APP_NAME)
APP_DIR           = app
DEPLOY_REGION     ?= us-east-1
PROFILE           = --profile $(ENV)

## INCLUDE TARGETS ##
include makefiles/container.mk
include makefiles/deploy.mk
include makefiles/help.mk
