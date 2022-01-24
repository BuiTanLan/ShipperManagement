create
    definer = dbmasteruser@`%` procedure get_order_shipper(IN order_id int)
BEGIN

    select
        o.id as Id,
        o.user_id as UserId,
        o.status as Status,
        o.detail_address as DetailAddress,
        o.district as District,
        o.province as Province,
        o.create_at as CreateAt,
        o.update_at as UpdateAt,
        u.full_name as FullName,
        u.phone as Phone,
        u.avatar_url as AvatarUrl,
        s.name as StoreName,
        s.address as StoreAddress,
        p.type as PaymentType,
        p.amount as PaymentAmount
    from orders o
             join users u on o.user_id = u.id
             join stores s on o.store_id = s.id
             join payments p on o.id = p.order_id
    where o.id = order_id;
END;
