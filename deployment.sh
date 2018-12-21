#!/bin/sh
	ssh ubuntu@35.154.232.170
	nodePath
	git pull
	npm install — production
	pm2 restart all
	exit
EOF