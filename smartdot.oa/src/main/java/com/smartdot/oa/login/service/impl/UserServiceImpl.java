package com.smartdot.oa.login.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.smartdot.oa.login.dao.UserMapper;
import com.smartdot.oa.login.entity.User;
import com.smartdot.oa.login.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {
	@Resource
	private UserMapper userMapper;
	
	@Override
	public User selectByPrimaryKey(String userCode) {
		return userMapper.selectByPrimaryKey(userCode);
	}

}
