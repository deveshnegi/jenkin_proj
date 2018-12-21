#!/bin/sh
	ssh ubuntu@35.154.232.170
	cd '/var/www/html/node-app'
	git pull
	npm install — production
	pm2 restart all
	exit
EOF