FROM node:20
WORKDIR /app
RUN echo "Copying files...."
COPY . .
WORKDIR /app/dr_odin/
RUN npm install
CMD ["npm", "run", "start"]
EXPOSE 8000
