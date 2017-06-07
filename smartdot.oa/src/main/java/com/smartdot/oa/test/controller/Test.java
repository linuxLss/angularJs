package com.smartdot.oa.test.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Test {
	private static Logger LOGGER = LoggerFactory.getLogger(Test.class);
	@RequestMapping(value="index.do")  
    public void index_jsp(Model model){  
        model.addAttribute("liming", "黎明dd你好");  
        System.out.println("index.jsp");  
        LOGGER.debug("=======ddddddrrrrrrrrrrrrrdddddd========");
    }  
}
