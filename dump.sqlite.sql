-- TABLE
CREATE TABLE agenda(
  id integer PRIMARY key AUTOINCREMENT,
  n_processo integer,
  data date not NULL,
  hora text NOT NULL,
  descrição text,
  advogado_id text NOT NULL,
  cliente_id integer,
  FOREIGN KEY (advogado_id) REFERENCES advogado(id),
  FOREIGN KEY(cliente_id) REFERENCES cliente(id)
);
CREATE TABLE cliente (
  id integer PRIMARY KEY AUTOINCREMENT,
  cpf_cnpj integer UNIQUE,
  n_processo integer,
  nome text not NULL,
  endereço text,
  telefone integer NOT NULL,
  email text NOT NULL);
CREATE TABLE demo (ID integer primary key, Name varchar(20), Hint text );
CREATE TABLE oab(
  id integer PRIMARY KEY AUTOINCREMENT,
  nome text not NULL,
  senha text NOT NULL,
  especialidade text,
  telefone integer,
  email text
);
 
-- INDEX
 
-- TRIGGER
 
-- VIEW
 
