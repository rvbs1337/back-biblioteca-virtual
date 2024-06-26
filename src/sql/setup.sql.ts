import { SQL } from './sql';

export class SetupSQL extends SQL {
    sqls = [
        `CREATE TABLE IF NOT EXISTS "public"."user" ("cpf" character varying(11) NOT NULL, "firstname" character varying(100) NOT NULL, "lastname" character varying(100) NOT NULL, "phonenumber" character varying(15) NOT NULL, "date" date NOT NULL, "email" character varying(255), "password" character varying(255) NOT NULL, "state" character varying(20) NOT NULL, "city" character varying(50) NOT NULL, CONSTRAINT "uq_user_email" UNIQUE ("email"), CONSTRAINT "pk_user_id" PRIMARY KEY ("cpf"))`,
        `CREATE TABLE IF NOT EXISTS "public"."book" ("id" SERIAL NOT NULL, "title" character varying(255) NOT NULL, "author" character varying(100) NOT NULL, "publisher" character varying(100) NOT NULL, "condition" character varying(15) check ("condition" in ('new', 'used')) NOT NULL NOT NULL, "image" text NOT NULL, "date" date NOT NULL, "type" character varying(15) check ("type" in ('donate', 'trade')) NOT NULL, "state" character varying(100) NOT NULL, "cityId" character varying(100) NOT NULL, "cityName" character varying(100) NOT NULL, "active" BOOLEAN NOT NULL, "cpf" character varying(11) NOT NULL, CONSTRAINT "pk_book_id" PRIMARY KEY ("id"))`,
        `ALTER TABLE "public"."book" ADD CONSTRAINT "fk_book_userId" FOREIGN KEY ("cpf") REFERENCES "public"."user"("cpf") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    ];
}