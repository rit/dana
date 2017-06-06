gentags:
	ctags -R --extra=+f src

deploy:
	rsync -ruvz dist/ dana-qa:/var/www/dana-qa.getty.edu
