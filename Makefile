#######################################
# MAKEFILE-PROJECT OPTIONS 
#######################################

node_version:=$(shell node -v)
npm_version:=$(shell npm -v)
timeStamp:=$(shell date +%Y%m%d%H%M%S)

DIR_PRJ_ROOT :=.
USE_GLOBAL_COMPILE :=
USE_GLOBAL_PLUGIN_COMPILE :=

.PHONY: show up down clean i

show:
	@ echo Timestamp: "$(timeStamp)"
	@ echo Node Version: $(node_version)
	@ echo npm_version: $(npm_version)

up:
	@ docker-compose --env-file .env -f docker-compose.dev.yml up -d --build

down:
	@ docker-compose -f docker-compose.dev.yml down

i:
	@ npm install && ng serve --host 0.0.0.0 --port 6004

clean:
	echo "cleaning the dist directory"
	@ rm -rf dist