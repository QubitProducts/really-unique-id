.PHONY: bootstrap test

bootstrap:
	@npm install

test:
	@npx standard
	@npx karma start --single-run=true