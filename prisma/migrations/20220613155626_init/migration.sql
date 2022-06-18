-- CreateTable
CREATE TABLE "birds" (
    "id_bird" SERIAL NOT NULL,
    "cientific_name" VARCHAR NOT NULL,
    "popular_name" VARCHAR,
    "main_color" VARCHAR,
    "wingspan" DECIMAL NOT NULL DEFAULT 0.0,

    CONSTRAINT "birds_pk" PRIMARY KEY ("id_bird")
);
