FROM node:14
ENV PATH /src/node_modules/.bin:$PATH
EXPOSE 8080
ADD . /src/
WORKDIR /src
RUN npm cache clean ;\
    npm update ;\
    npm ci
#ENTRYPOINT [ "npm" ]
CMD ["npm", "start"]