import { SQL } from './sql';

export class SetupSQL extends SQL {
    sqls = [
        `CREATE TABLE IF NOT EXISTS "public"."user" ("cpf" character varying(11) NOT NULL, "firstname" character varying(100) NOT NULL, "lastname" character varying(100) NOT NULL, "phonenumber" character varying(15) NOT NULL, "date" date NOT NULL, "email" character varying(255), "password" character varying(255) NOT NULL, "state" character varying(20) NOT NULL, "city" character varying(50) NOT NULL, CONSTRAINT "pk_user_id" PRIMARY KEY ("cpf"))`,
    ];
}
