mocha:
	mocha src/iso/*

lint-fix:
	@@npm run lint-fix

lint-show:
	@@npm run lint-show --silent

gentags:
	ctags -R --extra=+f src

deploy:
	npm run build
	rsync -ruvz dist/ dana-qa:/var/www/dana-qa.getty.edu
