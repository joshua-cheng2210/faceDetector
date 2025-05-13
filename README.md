# to run the front end website through docker image
- if you haven't built the docker image yet, run the following command:
- docker build -t [image name] .
- [image name] can be any name you want to give to the image, for example, faceDetector
- docker run -t -p 5000:8080 [image ID - can be found through docker application]
- the console will then print out this url: http://localhost:8080/faceDetector/
- 8080 is the port docker used to run the image, but to access the website, we need to use port 5000.
- so go to a browser and type in http://localhost:5000/faceDetector/