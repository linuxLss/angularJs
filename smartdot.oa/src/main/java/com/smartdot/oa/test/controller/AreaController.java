package com.smartdot.oa.test.controller;

import java.io.IOException;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.JsonGenerationException;
import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.SerializationConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.smartdot.oa.test.entity.Area;
import com.smartdot.oa.test.service.AreaService;

@Controller
@RequestMapping("/area")
public class AreaController {

	@Resource
	private AreaService areaService;

	private static Logger LOGGER = LoggerFactory
			.getLogger(AreaController.class);

	@RequestMapping("/getAreaByCode")
	@ResponseBody
	public String getAreaByAreaCode(
			// @RequestParam(value = "areaCode", required = false) String areaCode,
			HttpServletRequest request, HttpServletResponse response)
			throws JsonGenerationException, JsonMappingException, IOException {
		String areaCode = request.getParameter("areaCode");
		// String areaCode = "110000";
		Area areaOne = areaService.selectByPrimaryKey(areaCode);
		LOGGER.debug("=====areaOne====" + areaOne.toString());

		ObjectMapper mapper = new ObjectMapper();
		mapper.configure(SerializationConfig.Feature.INDENT_OUTPUT,
				Boolean.TRUE);
		String json = mapper.writeValueAsString(areaOne);
		LOGGER.debug("=====Java2Json: " + json);
		Area area2 = mapper.readValue(json, Area.class);
		LOGGER.debug("=====Json2Java: " + mapper.writeValueAsString(area2));
		return json;
	}
}
