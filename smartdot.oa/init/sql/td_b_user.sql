CREATE TABLE `td_b_user` (
	`USER_CODE` varchar(50)  COMMENT '用户编码',
	`USER_NAME` varchar(200)  COMMENT '用户名称',
	`PASSWORD` varchar(50)  COMMENT '密码',
	`DELETED` varchar(2)  COMMENT '生效标志 0-有效；1-失效',
	PRIMARY KEY (`USER_CODE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT = '用户表';