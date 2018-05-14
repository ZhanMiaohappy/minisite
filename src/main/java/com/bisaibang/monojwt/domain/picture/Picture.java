package com.bisaibang.monojwt.domain.picture;

import com.bisaibang.monojwt.domain.people.User;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A Article.
 */
@Entity
@Table(name = "picture")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Picture implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "url")
    private String url;

    @Column(name = "create_date")
    private ZonedDateTime createDate;

    @Column(name = "type")
    private String type;

    @Column(name = "tag")
    private String tag;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public ZonedDateTime getCreateDate() {
        return createDate;
    }

    public void setCreateDate(ZonedDateTime createDate) {
        this.createDate = createDate;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }


    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    public static Picture create(String url, String tag){
        Picture picture = new Picture();
        picture.setUrl(url);
        picture.setTag(tag);
        return picture;
    }

    private Picture() {
        type = "normal";
        createDate = ZonedDateTime.now();
    }

    public void delete(){
        this.type = "delete";
    }

}
