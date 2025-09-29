FROM postgres:16-alpine

ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_DB=saasdb

COPY init.sql /docker-entrypoint-initdb.d/init.sql