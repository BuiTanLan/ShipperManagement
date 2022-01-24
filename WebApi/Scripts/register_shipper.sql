create
    definer = dbmasteruser@`%` procedure register_shipper(OUT id int, IN email varchar(50),
                                                          IN password varchar(50),
                                                          IN district varchar(30),
                                                          IN province varchar(30),
                                                          IN full_name varchar(50), IN phone varchar(50),
                                                          IN address varchar(50))
BEGIN
    insert into users ( email, password, full_name,phone,address, role, create_at, update_at) VALUES
        (email, password, full_name,phone,address, 2, date_add(now(), interval 7 hour ),  date_add(now(), interval 7 hour ) );
    set @userId = last_insert_id();

    insert into shippers( user_id, create_at, update_at)  VALUES
        (@userId, date_add(now(), interval 7 hour ),  date_add(now(), interval 7 hour ));
    set id = last_insert_id();
    insert into delivery_area( shipper_id, district, province, create_at, update_at) values
        (id,district, province, date_add(now(), interval 7 hour ),  date_add(now(), interval 7 hour ));

END;

