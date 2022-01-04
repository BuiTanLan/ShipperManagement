create
definer = dbmasteruser@`%` procedure update_category(IN name varchar(50), IN id int)
BEGIN
update categories c
set c.name = name, c.update_at = date_add(now(), interval 7 hour )
where c.id = id;

END;

