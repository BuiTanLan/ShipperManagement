create
definer = dbmasteruser@`%` procedure get_all_category()
BEGIN

select
    c.name as Name,
    c.create_at as CreateAt,
    c.id as Id,
    c.update_at as UpdateAt

from categories c;
END;

