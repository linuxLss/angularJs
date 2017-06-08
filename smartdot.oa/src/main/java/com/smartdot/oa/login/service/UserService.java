package com.smartdot.oa.login.service;

import com.smartdot.oa.login.entity.User;

public interface UserService {
	User selectByPrimaryKey(String userCode);
}
