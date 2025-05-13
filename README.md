# to use the website
note: this website may take a few seconds to load, because render.com may not keep the server running all the time
- go to https://facedetector-web.onrender.com/

# information on hosting website
- https://dashboard.render.com/web/srv-d0hsds56ubrc73cuh1r0/deploys/dep-d0hsijl6ubrc73culdj0

# to run the front end website through docker image
note: this is unnecessary if you are running the website through render.com
- if you haven't built the docker image yet, run the following command:
- docker build -t [image name] .
- [image name] can be any name you want to give to the image, for example, faceDetector
- docker run -t -p 5000:8080 [image ID - can be found through docker application]
- the console will then print out this url: http://localhost:8080/faceDetector/
- 8080 is the port docker used to run the image, but to access the website, we need to use port 5000.
- so go to a browser and type in http://localhost:5000/faceDetector/

# learnings
- javascript
- react
- express end points
- docker
- hosting on render.com