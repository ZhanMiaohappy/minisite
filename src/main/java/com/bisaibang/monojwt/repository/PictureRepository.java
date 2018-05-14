package com.bisaibang.monojwt.repository;

import com.bisaibang.monojwt.domain.people.User;
import com.bisaibang.monojwt.domain.picture.Picture;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data JPA repository for the Article entity.
 */
@SuppressWarnings("unused")
public interface PictureRepository extends JpaRepository<Picture,Long> {


    Optional<Picture> findOneByIdAndType(Long id, String type);

    Page<Picture> findAllByTypeOrderByIdDesc(String type, Pageable pageable);





}
