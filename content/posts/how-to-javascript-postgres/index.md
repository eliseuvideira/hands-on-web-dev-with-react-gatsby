---
title: How to write postgres functions with javascript
subtitle: Make use of your javascript knowledge to handle data inside postgres database
description: How to add plv8 extension to postgres
date: 2020-06-05
---

# Requirements

Docker, install at https://docs.docker.com/get-docker/
Any sql editor, I recommend azuredatastudio with postgres extension, install at https://docs.microsoft.com/en-us/sql/azure-data-studio/download-azure-data-studio?view=sql-server-ver15

The docker image can be found at https://registry.hub.docker.com/r/clkao/postgres-plv8, search the tags tab for an specific postgres version.

# How to install

## Using the terminal

Pull the docker image:

      docker pull clkao/postgres-plv8:latest

Start the container with the following command:

      docker run \
       -p 5432:5432 \
       -e PGDATA=/var/lib/postgresql/data \
       -e POSTGRES_USER=anyuser \
       -e POSTGRES_PASSWORD=anypassword \
       -e POSTGRES_DB=anydb \
       -v /path/to/postgres/data:/var/lib/postgresql/data \
       --restart always \
       clkao/postgres-plv8:latest

Replace the placeholder values of anyuser, anypassword and anydb with the appropriate ones, set an valid path instead of /path/to/postgres/data, this is where the postgres data will be stored.

## Using an sql editor

Check if the extension is available:

      SELECT *
        FROM pg_catalog.pg_available_extensions
       WHERE name = 'plv8';

Enable the extension:

      CREATE EXTENSION plv8;

Test if works as intended:

      CREATE FUNCTION remove_duplicates(numbers integer[])
      RETURNS integer[] AS $$
        return [...new Set(numbers)];
      $$ LANGUAGE plv8 IMMUTABLE STRICT;

      SELECT remove_duplicates('{1,1,1,1,2,2,3,4,4}');

      DROP FUNCTION remove_duplicates;
