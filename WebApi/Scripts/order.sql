
--get_all_Order
create
definer = dbmasteruser@`%` procedure get_all_Order()
BEGIN

select
    d.user_id  as userId ,
    d.shipper_id  as shipperId ,
    d.create_at as createAt,
    d.id as id,
    d.update_at as updateAt,
    d.district as district,
    d.province as province,
    d.status as status,
    d.detail_address as detailAddress

from orders d;
END;


--get_Order
create
definer = dbmasteruser@`%` procedure get_Order(IN id int)
BEGIN

select
    d.user_id  as userId ,
    d.shipper_id  as shipperId ,
    d.create_at as createAt,
    d.id as id,
    d.update_at as updateAt,
    d.district as district,
    d.province as province,
    d.status as status,
    d.detail_address as detailAddress

from orders d
where d.id = id;
END;



--update_Order

create
definer = dbmasteruser@`%` procedure update_Order(IN id int, IN user_id int,IN shipper_id int,IN status int, IN detail_address varchar(50), IN district varchar(50), IN province varchar(50))
BEGIN
update orders d
set d.id = id,d.user_id = user_id, d.shipper_id = shipper_id, d.status = status, d.detail_address = detail_address, d.district = district, d.province = province, d.update_at = date_add(now(), interval 7 hour )
where c.id = id;

END;



