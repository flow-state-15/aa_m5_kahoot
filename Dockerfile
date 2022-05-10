FROM node:17

ENV REACT_APP_BASE_URL=http://localhost:5000

WORKDIR /backend

COPY /backend/build/* app/static/

WORKDIR /frontend

COPY /frontend/build/* app/static/

CMD [ "npm", "start" ]
