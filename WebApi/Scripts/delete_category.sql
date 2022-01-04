create
definer = dbmasteruser@`%` procedure delete_category(IN id int)
BEGIN

delete from categories c
where c.id = id;
END;

