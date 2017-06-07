package com.smartdot.oa.test.dao;



import com.smartdot.oa.test.entity.Area;

public interface AreaMapper {
    int deleteByPrimaryKey(String areaCode);

    int insert(Area record);

    int insertSelective(Area record);

    Area selectByPrimaryKey(String areaCode);

    int updateByPrimaryKeySelective(Area record);

    int updateByPrimaryKey(Area record);
}