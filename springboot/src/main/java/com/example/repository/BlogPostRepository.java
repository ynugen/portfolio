package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.entity.BlogPost;;

public interface BlogPostRepository extends JpaRepository<BlogPost, Long>{
    
}
