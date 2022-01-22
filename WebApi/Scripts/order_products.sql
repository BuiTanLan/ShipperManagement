--get_all_OrderProduct
create
definer = dbmasteruser@`%` procedure get_all_OrderProduct()
BEGIN

select
    	d.id = id,
	d.orderID= orderID,
	d.productID=productID,
	d.createAt =createAt,
	d.updateAt = updateAt
from orders_products d;
END;


--get_OrderProduct
create
definer = dbmasteruser@`%` procedure get_OrderProduct(IN id int)
BEGIN

select
    	d.id = id,
	d.orderID= orderID,
	d.productID=productID,
	d.createAt =createAt,
	d.updateAt = updateAt

from orders_products d
where d.id = id;
END;



--update_OrderProduct
create
definer = dbmasteruser@`%` procedure update_OrderProduct(IN id int, IN order_id int,IN product_id int)
BEGIN
update orders_products d
set d.id = id,d.order_id = order_id, d.product_id = product_id, d.update_at = date_add(now(), interval 7 hour )
where c.id = id;

END;

