# ----------------------
# Step 1: Build React frontend (Node 16 avoids OpenSSL issue)
# ----------------------
FROM node:16-alpine AS build-client

WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

# ----------------------
# Step 2: Build backend (Node 18) + copy frontend build
# ----------------------
FROM node:18-alpine

WORKDIR /app/server
COPY server/package*.json ./
RUN npm install --production
COPY server/ .

# Put the built frontend under server/public
COPY --from=build-client /app/client/build ./public

EXPOSE 5000
CMD ["npm", "start"]
