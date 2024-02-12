build:
	docker build --platform linux/amd64 -t rokokos97/pet-project:latest .
run:
	docker run -d -p 80:8080 --name pet-project --rm rokokos97/pet-project
