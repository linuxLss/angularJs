package com.smartdot.oa.login.controller;

import javax.annotation.Resource;

import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.smartdot.oa.login.entity.User;
import com.smartdot.oa.login.service.UserService;
import com.smartdot.oa.test.controller.AreaController;

@Controller
@RequestMapping("/login")
public class UserController {
	@Resource
	private UserService userService;

	private static Logger LOGGER = LoggerFactory
			.getLogger(AreaController.class);

	@RequestMapping("/loginCheck")
	@ResponseBody
	public boolean loginCheck(
			@RequestParam(value = "userName", required = false) String userCode,
			@RequestParam(value = "userPassword", required = false) String userPassword) {
		LOGGER.debug("userCode........." + userCode);
		LOGGER.debug("userPassword....." + userPassword);
		boolean result = false;
		if (StringUtils.isNotBlank(userCode) && StringUtils.isNotBlank(userPassword)) {
			User user = userService.selectByPrimaryKey(userCode);
			if (user != null && userPassword.equals(user.getPassword())) {
				return true;
			}
		}
		return result;
	}
}
