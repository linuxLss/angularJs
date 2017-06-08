CREATE TABLE `td_b_area` (
	`AREA_CODE` varchar(50)  COMMENT '区域编码',
	`PAR_AREA_CODE` varchar(50)  COMMENT '父区域编码',
	`AREA_NAME` varchar(50)  COMMENT '区域名称',
	`EN_SPELL` varchar(50)  COMMENT '简写',
	`LEVEL` varchar(50)  COMMENT '级别',
	PRIMARY KEY (`AREA_CODE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT = '区域表';