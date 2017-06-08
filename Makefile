mocha:
	mocha src/iso/*

gentags:
	ctags -R --extra=+f src

deploy:
	rsync -ruvz dist/ dana-qa:/var/www/dana-qa.getty.edu

deploy-iiif:
	rsync -ruvz static/iiif dana-qa:/var/www/dana-qa.getty.edu/static
