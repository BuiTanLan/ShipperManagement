create
    definer = dbmasteruser@`%` procedure get_shipper(IN shipper_id INT)
SELECT s.id as Id,
       s.user_id as UserId,
       s.update_at as UpdateAt,
       s.create_at as CreateAt,
       u.full_name as FullName,
       u.email as Email,
       u.phone as Phone,
       u.birthday as Birthday,
       u.address as Address,
       u.avatar_url as AvatarUrl,
       u.role as Role
FROM ptudhd.shippers s
JOIN ptudhd.users u on s.user_id = u.id
WHERE s.id = shipper_id;

