## CONTAINER VARS ##
DEV_TAG      	  = dev
CONTAINER_NAME    = marble_gamble_web
IMAGE_BUILD       = $(PROJECT_NAME):$(ENV)
IMAGE_DEV         = $(PROJECT_NAME):$(DEV_TAG)

build: ##@Global Build image docker
	docker build -f docker/dev/Dockerfile --no-cache -t $(IMAGE_BUILD) .

install: ##@Global Install dependencies
	docker container run --workdir "/$(APP_DIR)" --rm -i \
		-v "$(PWD)/$(APP_DIR)":/$(APP_DIR) \
		$(IMAGE_BUILD) \
		/bin/bash -c "npm install && npm run build"

up: ##@Local Up container
	docker run -it --rm -d -v "$(PWD)/$(APP_DIR)":/$(APP_DIR) -p 1150:80 \
		--name $(CONTAINER_NAME) \
		-e TZ=$(TIME_ZONE) \
    	$(IMAGE_BUILD) \
    	npm run dev

down: ##@Local Down container
	docker stop $(CONTAINER_NAME)

logs: ##@Local Show container logs
	docker logs -f $(CONTAINER_NAME)
