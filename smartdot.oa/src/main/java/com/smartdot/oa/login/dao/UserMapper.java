package com.smartdot.oa.login.dao;

import com.smartdot.oa.login.entity.User;

public interface UserMapper {
    int deleteByPrimaryKey(String userCode);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(String userCode);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
}