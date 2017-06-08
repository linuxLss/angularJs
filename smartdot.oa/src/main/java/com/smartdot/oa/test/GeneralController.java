package com.smartdot.oa.test;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller 
@RequestMapping(value="/GeneralController")
public class GeneralController {
	@RequestMapping(value="index.do")  
    public void index_jsp(Model model){  
        model.addAttribute("liming", "您好，世界");  
        System.out.println("index.jsp");  
    } 
	
	@RequestMapping(value="/testRest")  
	@ResponseBody
	public String testRest() {
		
		return "hehehddddddddsssdddehe";
	}
}
