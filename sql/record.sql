-- 到服务器已更新
alter table court_basic add column finish_time varchar(50);
alter table indicator_value modify column location varchar(3000);
alter table indicator_value_build modify column location varchar(3000);

-- 未更新到服务器

