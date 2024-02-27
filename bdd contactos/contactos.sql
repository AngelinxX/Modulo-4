drop table contactos

create table contactos(
	id serial,
	nombre varchar(100) not null,
	apellido varchar(100) not null,
	celular varchar(100) not null,
	constraint contactos_pk primary key (id)
)

insert into contactos(nombre,apellido,celular)
values ('Angel','Fajardo','0902921397');

insert into contactos(nombre,apellido,celular)
values ('Andres','Andrade','0902921346');

insert into contactos(nombre,apellido,celular)
values ('Jose','Perez','0902921363');

select * from contactos 
