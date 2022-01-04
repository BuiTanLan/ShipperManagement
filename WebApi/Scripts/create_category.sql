create
definer = dbmasteruser@`%` procedure create_category(IN name varchar(50), OUT id int)
BEGIN

insert into categories ( name, create_at, update_at) VALUES
    (name, date_add(now(), interval 7 hour ),  date_add(now(), interval 7 hour ));
set id = last_insert_id();

END;
