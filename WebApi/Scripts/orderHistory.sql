
--get_all_orderHistory
create
definer = dbmasteruser@`%` procedure get_all_orderHistory()
BEGIN

select
    d.id  as id ,
    d.status as user_id,
    d.create_at as createAt,
    d.update_at as updateAt
from orders_history d;
END;


--get_payment
create
definer = dbmasteruser@`%` procedure get_orderHistory(IN id int)
BEGIN

select
    d.id  as id ,
    d.status as user_id,
    d.create_at as createAt,
    d.update_at as updateAt
from orders_history d;
where d.id = id;
END;

create
definer = dbmasteruser@`%` procedure create_orderHistory( IN status int, OUT id int)
BEGIN

insert into orders_history ( status, create_at, update_at) VALUES
    (status, date_add(now(), interval 7 hour ),  date_add(now(), interval 7 hour ));
set id = last_insert_id();

END;



