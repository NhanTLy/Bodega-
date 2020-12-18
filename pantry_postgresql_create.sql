SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

CREATE TABLE public.pantry (
	_id serial NOT NULL,
	item_name varchar NOT NULL,
	note varchar,
	unit varchar,
	qty integer,
	category varchar,
	par integer,
	CONSTRAINT pantry_pk PRIMARY KEY (_id)
);

CREATE TABLE public.shopping (
	_id serial NOT NULL,
	item_name varchar NOT NULL,
	note varchar,
	unit varchar,
	list_qty integer,
	category varchar,
	CONSTRAINT shopping_pk PRIMARY KEY (_id)
);

INSERT INTO public.pantry (item_name, note, unit, qty, category, par) VALUES ('Eggs', 'Brown', 'Each', '10', 'Fridge', '12');
INSERT INTO public.pantry (item_name, note, unit, qty, category, par) VALUES ('Milk', 'Whole', 'Gallon', '1', 'Fridge', '1');
INSERT INTO public.pantry (item_name, note, unit, qty, category, par) VALUES ('Bread', 'White', 'Loaf', '4', 'Pantry', '3');

INSERT INTO public.shopping (item_name, note, unit, list_qty, category) VALUES ('Sam Adams', 'Lager', 'Bottle', '12', 'Alcohol');
