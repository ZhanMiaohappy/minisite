package com.bisaibang.monojwt.domain.vm;

/**
 * Created by Lynn on 2017/3/22.
 */
public class PictureVM {

    private String url;

    private String tag;


    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    @Override
    public String toString() {
        return "PictureVM{" +
            "url='" + url + '\'' +
            ", tag='" + tag + '\'' +
            '}';
    }
}
