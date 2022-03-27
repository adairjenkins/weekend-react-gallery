-- CREATE DATABASE "gallery";

-- Table structure
CREATE TABLE "items" (
	"id" SERIAL PRIMARY KEY,
	"path"  TEXT NOT NULL,
	"artist" TEXT,
	"title" TEXT,
	"date" INT,
	"likes" INT DEFAULT 0
);

INSERT INTO "items" ("path", "artist", "title", "date")
VALUES ('images/kandinsky.jpg', 'Vasily Kandinsky', 'Several Circles', 1926),
	   ('images/whistler.jpg', 'James Abbott McNeill Whistler', 'Nocturne: Blue and Silver - Chelsea', 1871),
	   ('images/klimt.jpg', 'Gustav Klimt', 'Beech Forest I', 1903),
	   ('images/marc.jpg', 'Franz Marc', 'Large Blue Horses', 1911),
	   ('images/matisse.jpg', 'Henri Matisse', 'La Gerbe', 1953),
	   ('images/mondrian.jpg', 'Piet Mondrian', 'Composition C (No.III) with Red, Yellow and Blue', 1935),
	   ('images/okeeffe.jpg', 'Georgia O''Keeffe', 'Evening Star No. II', 1917),
	   ('images/turner.jpg', 'J.M.W. Turner', 'Snow Storm - Steam-Boat off a Harbour''s Mouth', 1842),
	   ('images/hockney.jpg', 'David Hockney', 'Autumn Pool', 1978);