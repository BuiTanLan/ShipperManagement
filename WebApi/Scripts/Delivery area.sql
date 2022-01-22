--create_DeliveryArea
create
definer = dbmasteruser@`%` procedure create_DeliveryArea(IN name varchar(50), OUT id int)
BEGIN

insert into delivery_area ( id_shipper, district, province,create_at, update_at) VALUES
    (id_shipper,district, province, date_add(now(), interval 7 hour ),  date_add(now(), interval 7 hour ));
set id = last_insert_id();

END;



--get_all_DeliveryArea
create
definer = dbmasteruser@`%` procedure get_all_DeliveryArea()
BEGIN

select
    d.id_shipper as IDShipper,
    d.create_at as CreateAt,
    d.id as Id,
    d.update_at as UpdateAt,
    d.district as District,
    d.province as Province

from delivery_area d;
END;



--get_DeliveryArea
create
definer = dbmasteruser@`%` procedure get_DeliveryArea(IN id int)
BEGIN

select
    d.id_shipper as IDShipper,
    d.create_at as CreateAt,
    d.id as Id,
    d.update_at as UpdateAt,
    d.district as District,
    d.province as Province

from delivery d
where d.id = id;
END;


--delete_DeliveryArea
create
definer = dbmasteruser@`%` procedure delete_DeliveryArea(IN id int)
BEGIN

delete from delivery d
where d.id = id;
END;


--update_DeliveryArea

create
definer = dbmasteruser@`%` procedure update_DeliveryArea(IN name varchar(50), IN id int, IN district varchar(50), IN province varchar(50))
BEGIN
update delivery d
set d.name = name, d.district = district, d.province = province, d.update_at = date_add(now(), interval 7 hour )
where c.id = id;

END;
