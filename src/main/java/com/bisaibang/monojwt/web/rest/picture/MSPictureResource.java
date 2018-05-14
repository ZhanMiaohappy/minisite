package com.bisaibang.monojwt.web.rest.picture;

import com.bisaibang.monojwt.domain.article.Article;
import com.bisaibang.monojwt.domain.picture.Picture;
import com.bisaibang.monojwt.domain.util.ResponseMessage;
import com.bisaibang.monojwt.domain.vm.PictureVM;
import com.bisaibang.monojwt.repository.ArticleRepository;
import com.bisaibang.monojwt.repository.PictureRepository;
import com.bisaibang.monojwt.security.MSAuthority;
import com.bisaibang.monojwt.service.article.MSArticleService;
import com.codahale.metrics.annotation.Timed;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URISyntaxException;

import static com.bisaibang.monojwt.domain.util.ResponseMessage.message;

@RestController
@RequestMapping("/api")
public class MSPictureResource {

    private final Logger log = LoggerFactory.getLogger(MSPictureResource.class);

    @Autowired
    private PictureRepository pictureRepository;

    @Autowired
    private MSAuthority msAuthority;

    @Autowired
    private MSArticleService msArticleService;


    /**
     * 图集加一个图片
     */
    @PostMapping("/ms-picture/upload-picture")
    @Timed
    public ResponseEntity<?> uploadPicture(@Valid @RequestBody PictureVM data) throws URISyntaxException {
        if (!msAuthority.isAdmin()) {
            return ResponseEntity.ok(message("越权"));
        }
        PictureVM vm = msAuthority.SQLInject(data);
        Picture picture = Picture.create(vm.getUrl(), vm.getTag());
        pictureRepository.save(picture);
        return ResponseEntity.ok(ResponseMessage.message("成功"));
    }



    /**
     * 删除
     */
    @PostMapping("/ms-picture/delete-picture/picture/{pictureid}")
    @Timed
    public ResponseEntity<?> deletePicture(@PathVariable Long pictureid) throws URISyntaxException {
        if (!msAuthority.isAdmin()) {
            return ResponseEntity.ok(message("越权"));
        }
        Picture picture = pictureRepository.findOne(pictureid);
        picture.delete();
        pictureRepository.save(picture);
        return ResponseEntity.ok(ResponseMessage.message("成功"));
    }


    /**
     * get all
     */
    @GetMapping("/ms-picture/get-all-picture")
    @Timed
    public ResponseEntity<?> getAllPicture(@Valid Pageable pageable) throws URISyntaxException {
        return ResponseEntity.ok(pictureRepository.findAllByTypeOrderByIdDesc("normal", pageable));
    }



}
