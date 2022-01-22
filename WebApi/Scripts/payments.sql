
--get_all_Payment
create
definer = dbmasteruser@`%` procedure get_all_Payment()
BEGIN

select
    d.id  as id ,
    d.order_id  as order_id,
    d.create_at as createAt,
    d.type as  type,
    d.update_at as updateAt,
    d.amount as  amount,
    d.data as data

from payments d;
END;


--get_payment
create
definer = dbmasteruser@`%` procedure get_payment(IN id int)
BEGIN

select
    d.id  as id ,
    d.order_id  as order_id,
    d.create_at as createAt,
    d.type as  type,
    d.update_at as updateAt,
    d.amount as  amount,
    d.data as data


from payments d
where d.id = id;
END;




