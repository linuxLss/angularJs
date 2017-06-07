package com.smartdot.oa.test.entity;

public class Area {
    private String areaCode;

    private String parAreaCode;

    private String areaName;

    private String enSpell;

    private String level;

    public String getAreaCode() {
        return areaCode;
    }

    public void setAreaCode(String areaCode) {
        this.areaCode = areaCode == null ? null : areaCode.trim();
    }

    public String getParAreaCode() {
        return parAreaCode;
    }

    public void setParAreaCode(String parAreaCode) {
        this.parAreaCode = parAreaCode == null ? null : parAreaCode.trim();
    }

    public String getAreaName() {
        return areaName;
    }

    public void setAreaName(String areaName) {
        this.areaName = areaName == null ? null : areaName.trim();
    }

    public String getEnSpell() {
        return enSpell;
    }

    public void setEnSpell(String enSpell) {
        this.enSpell = enSpell == null ? null : enSpell.trim();
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level == null ? null : level.trim();
    }

	@Override
	public String toString() {
		return "Area [areaCode=" + areaCode + ", parAreaCode=" + parAreaCode + ", areaName=" + areaName + ", enSpell="
				+ enSpell + ", level=" + level + "]";
	}
    
}