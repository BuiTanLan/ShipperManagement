
--get_all_store 
create
definer = dbmasteruser@`%` procedure get_all_store()
BEGIN

select
    d.id  as id ,
    d.user_id as user_id,
    d.create_at as createAt,
    d.update_at as updateAt,
    d.address as  address
from stores d;
END;


--get_store
create
definer = dbmasteruser@`%` procedure get_store(IN id int)
BEGIN

select
  d.id  as id ,
    d.user_id as user_id,
    d.create_at as createAt,
    d.update_at as updateAt,
    d.address as  address
from stores d
where d.id = id;
END;




