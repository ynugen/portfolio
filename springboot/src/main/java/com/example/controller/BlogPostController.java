package com.example.controller;

import com.example.entity.BlogPost;
import com.example.service.BlogPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RestMapping("api/")
public class BlogPostController {
    
    private final BlogPostService blogPostService;

    @Autowired
    public BlogPostController(BlogPostService blogPostService) {
        this.blogPostService = blogPostService;
    }

    /**
     * Create a new blog post.
     * 
     * @param blogPost the blog post to create
     * @return the ResponseEntity with status 200 (OK) and with body of new blog post
     */
    @PostMapping("blogpost")
    public ResponseEntity<BlogPost> saveBlogPost(@RequestBody BlogPost blogPost) {
        BlogPost newBlogPost = blogPostService.saveBlogPost(blogPost);
        return ResponseEntity.ok(newBlogPost);
    }

    /**
     * Get all blog posts.
     * 
     * @return the list of blog posts
     */
    @GetMapping("/blogposts")
    public List<BlogPost> getAllBlogPosts() {
        return blogPostService.getAllBlogPosts();
    }

    /**
     * Get a blog post by ID.
     * 
     * @param id the ID of the blog post to get
     * @return the ResponseEntity with status 200 (OK) with body of blog post, or with status 404 (Not Found) if blog post does not exist
     */
    @GetMapping("/blogposts/{id}")
    public ResponseEntity<BlogPost> getBlogPostById(@PathVariable Long id) {
        Optional<BlogPost> blogPost = blogPostService.getBlogPostById(id);
        return blogPost.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    /**
     * Update blog post by ID.
     * 
     * @param id the ID of blog post to update
     * @param blogPost the updated blog post
     * @return the ResponseEntity with status 200 (OK) with body of updated blog post, or with status 404 (Not Found) if product does not exist
     */
    @PutMapping("/products/{id}")
    public ResponseEntity<BlogPost> updateBlogPost(@PathVariable Long id, @RequestBody BlogPost blogPost) {
        BlogPost updateBlogPost = blogPostService.updateBlogPost(id, blogPost);
        return ResponseEntity.ok(updateBlogPost);
    }

    /**
     * Delete a blog post by ID
     * 
     * @param id the ID of blog post to delete
     * @return the ResponseEntity with status 200 (OK) with body of message "Blog post successfully deleted"
     */
    @DeleteMapping("/products/{id}")
    public ResponseEntity<String> deleteBlogPost(@PathVariable Long id) {
        blogPostService.deleteBlogPost(id);
        return ResponseEntity.ok("Product deleted successfully");
    }
}