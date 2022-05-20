# personal-card
Simple webpage for business card

Just change the files inside data folder to create your own personal card.

## Using docker image
- Use ```-p 80:80``` to map a port
- Use ```-v /path/to/data/foler:/usr/share/nginx/html/data```
- Example: ```docker run -p 80:80 -v /path/to/data/foler:/usr/share/nginx/html/data bmont/personal-card:latest```