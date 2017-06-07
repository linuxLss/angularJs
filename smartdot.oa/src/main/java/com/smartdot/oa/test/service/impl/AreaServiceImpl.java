package com.smartdot.oa.test.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.smartdot.oa.test.dao.AreaMapper;
import com.smartdot.oa.test.entity.Area;
import com.smartdot.oa.test.service.AreaService;

@Service("areaService")
public class AreaServiceImpl implements AreaService {
	@Resource
	private AreaMapper areaMapper;

	public Area selectByPrimaryKey(String areaCode) {
		return this.areaMapper.selectByPrimaryKey(areaCode);
	}


}
