package com.bisaibang.monojwt.domain.vm;

import com.bisaibang.monojwt.domain.team.TeamPlayer;

import java.util.List;

/**
 * Created by Lynn on 2017/3/22.
 */
public class RegistVM {

    private String teamName;

    private String school;

    private String name;

    private String phone;

    private String personID;

    private String schoolID;

    private String miID;

    private List<TeamPlayer> teamPlayers;

    public String getTeamName() {
        return teamName;
    }

    public void setTeamName(String teamName) {
        this.teamName = teamName;
    }

    public String getSchool() {
        return school;
    }

    public void setSchool(String school) {
        this.school = school;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getPersonID() {
        return personID;
    }

    public void setPersonID(String personID) {
        this.personID = personID;
    }

    public String getSchoolID() {
        return schoolID;
    }

    public void setSchoolID(String schoolID) {
        this.schoolID = schoolID;
    }

    public String getMiID() {
        return miID;
    }

    public void setMiID(String miID) {
        this.miID = miID;
    }

    public List<TeamPlayer> getTeamPlayers() {
        return teamPlayers;
    }

    public void setTeamPlayers(List<TeamPlayer> teamPlayers) {
        this.teamPlayers = teamPlayers;
    }

    @Override
    public String toString() {
        return "RegistVM{" +
            "teamName='" + teamName + '\'' +
            ", school='" + school + '\'' +
            ", name='" + name + '\'' +
            ", phone='" + phone + '\'' +
            ", personID='" + personID + '\'' +
            ", schoolID='" + schoolID + '\'' +
            ", miID='" + miID + '\'' +
            ", teamPlayers=" + teamPlayers +
            '}';
    }

    public static RegistVM create( String teamName, String school,String name, String phone, String personID, String miID, String schoolID,List<TeamPlayer> teamPlayers){
        RegistVM r = new RegistVM();
        r.setTeamName(teamName);
        r.setSchool(school);
        r.setPhone(phone);
        r.setName(name);
        r.setPersonID(personID);
        r.setSchoolID(schoolID);
        r.setMiID(miID);
        r.setTeamPlayers(teamPlayers);
        return r;
    }
}
