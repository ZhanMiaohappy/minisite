package com.bisaibang.monojwt.domain.people;

import com.bisaibang.monojwt.config.Constants;
import com.bisaibang.monojwt.domain.generate.AbstractAuditingEntity;
import com.bisaibang.monojwt.domain.generate.Authority;
import com.bisaibang.monojwt.service.util.RandomUtil;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.hibernate.validator.constraints.Email;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;

/**
 * A people.
 */
@Entity
@Table(name = "jhi_user")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class User extends AbstractAuditingEntity implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Pattern(regexp = Constants.LOGIN_REGEX)
    @Size(min = 1, max = 50)
    @Column(length = 50, unique = true, nullable = false)
    private String login;

    @Size(min = 1, max = 50)
    @Column(length = 50)
    private String nickName;

    @JsonIgnore
    @NotNull
    @Size(min = 60, max = 60)
    @Column(name = "password_hash", length = 60)
    private String password;

    @Size(max = 50)
    @Column(name = "first_name", length = 50)
    private String firstName;

    @Size(max = 50)
    @Column(name = "last_name", length = 50)
    private String lastName;

    @Email
    @JsonIgnore
    @Size(max = 100)
    @Column(length = 100, unique = true)
    private String email;

    // bsb v2
    @Size(max = 100)
    @Column(name = "phone", length = 100, unique = true)
    private String phone;

    @Size(max = 20)
    @Column(name = "confirm_code", length = 100, unique = true)
    @JsonIgnore
    private String confirmCode;

    @Column(name = "avatar_url")
    private String avatarUrl;

    @NotNull
    @Column(nullable = false)
    private boolean activated = false;

    @Size(min = 2, max = 5)
    @Column(name = "lang_key", length = 5)
    private String langKey;

    @Size(max = 20)
    @Column(name = "activation_key", length = 20)
    @JsonIgnore
    private String activationKey;

    @Size(max = 20)
    @Column(name = "reset_key", length = 20)
    private String resetKey;

    @Column(name = "reset_date", nullable = true)
    private ZonedDateTime resetDate = null;

    @Column(name = "is_reliable")
    private String isReliable;

    @Column(name = "personal_email")
    private String personalEmail;

    @Column(name = "personal_id")
    private String personalID;

    @Column(name = "config")
    private String config;

    @Column(name = "school_id")
    private String schoolID;

    @Column(name = "user_phone")
    private String userPhone;

    @Column(name = "mi_id")
    private String miID;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "jhi_user_authority",
        joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "id")},
        inverseJoinColumns = {@JoinColumn(name = "authority_name", referencedColumnName = "name")})
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Authority> authorities = new HashSet<>();


    public String getUserPhone() {
        return userPhone;
    }

    public void setUserPhone(String userPhone) {
        this.userPhone = userPhone;
    }

    public String getSchoolID() {
        return schoolID;
    }

    public void setSchoolID(String schoolID) {
        this.schoolID = schoolID;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User set(Long id) {
        this.id = id;
        return this;
    }

    public String getPersonalEmail() {
        return personalEmail;
    }

    public void setPersonalEmail(String personalEmail) {
        this.personalEmail = personalEmail;
    }

    public String getPersonalID() {
        return personalID;
    }

    public void setPersonalID(String personalID) {
        this.personalID = personalID;
    }

    public String getConfig() {
        return config;
    }

    public void setConfig(String config) {
        this.config = config;
    }

    public String getLogin() {
        if (login.startsWith("1") && login.length() == 11) {
            return login.substring(0, 3) + "****" + login.substring(7, 11);
        } else {
            return login;
        }
    }

    //Lowercase the login before saving it in database
    public void setLogin(String login) {
        this.login = login.toLowerCase(Locale.ENGLISH);
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public User nickName(String nickName) {
        this.nickName = nickName;
        return this;
    }


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    // bsb v2
    public String getFullPhone() {
        return this.phone;
    }

    public String getPhone() {
        return getLogin();
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getConfirmCode() {
        return confirmCode;
    }

    public void setConfirmCode(String confirmCode) {
        this.confirmCode = confirmCode;
    }

    public boolean getActivated() {
        return activated;
    }

    public void setActivated(boolean activated) {
        this.activated = activated;
    }

    public String getActivationKey() {
        return activationKey;
    }

    public void setActivationKey(String activationKey) {
        this.activationKey = activationKey;
    }

    public String getResetKey() {
        return resetKey;
    }

    public void setResetKey(String resetKey) {
        this.resetKey = resetKey;
    }

    public ZonedDateTime getResetDate() {
        return resetDate;
    }

    public void setResetDate(ZonedDateTime resetDate) {
        this.resetDate = resetDate;
    }

    public String getLangKey() {
        return langKey;
    }

    public void setLangKey(String langKey) {
        this.langKey = langKey;
    }

    public Set<Authority> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Set<Authority> authorities) {
        this.authorities = authorities;
    }

    public String getAvatarUrl() {
        return avatarUrl;
    }

    public void setAvatarUrl(String avatarUrl) {
        this.avatarUrl = avatarUrl;
    }

    public void getDefaultAvatar() {
        this.setAvatarUrl(RandomUtil.getUserDefaultUrl());
    }

    public boolean isActivated() {
        return activated;
    }

    public String getIsReliable() {
        return isReliable;
    }

    public void setIsReliable(String isReliable) {
        this.isReliable = isReliable;
    }

    public String getMiID() {
        return miID;
    }

    public void setMiID(String miID) {
        this.miID = miID;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        User user = (User) o;

        if (!login.equals(user.login)) {
            return false;
        }

        return true;
    }

    public String getReliable() {
        return isReliable;
    }

    public void setReliable(String reliable) {
        isReliable = reliable;
    }

    @Override
    public int hashCode() {
        return login.hashCode();
    }

    public static User create(int id) {
        User user = new User();
        user.setId(Integer.toUnsignedLong(id));
        return user;
    }

    public Boolean hasNickName() {
        return this.nickName != null;
    }

    public void removeNickName() {
        this.nickName = null;
    }

    public Boolean Reliable() {
        return this.getReliable().equals("true");
    }

    public void clean() {
        nickName = null;
    }


    @Override
    public String toString() {
        return "User{" +
            "id=" + id +
            ", login='" + login + '\'' +
            ", nickName='" + nickName + '\'' +
            ", password='" + password + '\'' +
            ", firstName='" + firstName + '\'' +
            ", lastName='" + lastName + '\'' +
            ", email='" + email + '\'' +
            ", phone='" + phone + '\'' +
            ", confirmCode='" + confirmCode + '\'' +
            ", avatarUrl='" + avatarUrl + '\'' +
            ", activated=" + activated +
            ", langKey='" + langKey + '\'' +
            ", activationKey='" + activationKey + '\'' +
            ", resetKey='" + resetKey + '\'' +
            ", resetDate=" + resetDate +
            ", isReliable='" + isReliable + '\'' +
            ", personalEmail='" + personalEmail + '\'' +
            ", personalID='" + personalID + '\'' +
            ", config='" + config + '\'' +
            ", schoolID='" + schoolID + '\'' +
            ", userPhone='" + userPhone + '\'' +
            ", miID='" + miID + '\'' +
            ", authorities=" + authorities +
            '}';
    }
}
