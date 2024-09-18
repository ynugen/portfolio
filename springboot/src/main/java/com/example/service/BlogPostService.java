package com.example.service;

import com.example.entity.BlogPost;
import com.example.repository.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.lang.RuntimeException;

import java.util.List;
import java.util.Optional;

@Service
public class BlogPostService {
    private final BlogPostRepository blogPostRepository;

    @Autowired
    public BlogPostService(BlogPostRepository blogPostRepository) {
        this.blogPostRepository = blogPostRepository;
    }

    /**
     * Save a blog post.
     * 
     * @param blogPost the entity to save
     * @return the existing entity
     */
    public BlogPost saveBlogPost(BlogPost blogPost) {
        return blogPostRepository.save(blogPost);
    }

    /**
     * Get all blog posts.
     * 
     * @return the list of entities
     */
    public List<BlogPost> getAllBlogPosts() {
        return blogPostRepository.findAll();
    }

    /**
     * Find blog post by ID.
     * 
     * @param id the ID of entity
     * @return the entity
     */
    public Optional<BlogPost> getBlogPostById(Long id) {
        return blogPostRepository.findById(id);
    }

    /**
     * Update a blog post.
     * 
     * @param id the ID of entity
     * @param updatedBlogPost the updated entity
     * @return the updated entity
     */
    public BlogPost updateBlogPost(Long id, BlogPost updatedBlogPost) {
        Optional<BlogPost> existingBlogPost = blogPostRepository.findById(id);

        if(existingBlogPost.isPresent()) {
            BlogPost blog = existingBlogPost.get();
            blog.setTitle(updatedBlogPost.getTitle());
            blog.setCategory(updatedBlogPost.getCategory());
            blog.setDate(updatedBlogPost.getDate());
            blog.setText(updatedBlogPost.getText());
            return blogPostRepository.save(blog);
        } else {
            throw new RuntimeException("Blog post not found");
        }
    }

    /**
     * Delete blog post by ID.
     * 
     * @param id the ID of entity
     */
    public void deleteBlogPost(Long id) {
        blogPostRepository.deleteById(id);
    }
}
