"use client";
import React from "react";
import Navbar from "../(components)/Navbar";
import CardBlog from "./CardBlog"
import Footer from "../(components)/Footer";

const Blog = () => {
  return (
    <div style={{backgroundColor:'#B026FF', color:'#242323'}}>
      <Navbar />
      <h1 style={{fontSize:'4rem', fontWeight:'700', textAlign:'center', paddingTop:'7rem', paddingBottom:'7rem'}}>Blog</h1>
      <CardBlog
      img='modern.jpg'
      title='BLOG'
      text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum
      quisquam ullam blanditiis dolor recusandae.'
      />
      <CardBlog
      img='modern.jpg'
      title='BLOG'
      text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum
      quisquam ullam blanditiis dolor recusandae.'
      />
      <CardBlog
      img='modern.jpg'
      title='BLOG'
      text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum
      quisquam ullam blanditiis dolor recusandae.'
      />
      <CardBlog
      img='modern.jpg'
      title='BLOG'
      text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum
      quisquam ullam blanditiis dolor recusandae.'
      />
      <CardBlog
      img='modern.jpg'
      title='BLOG'
      text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa harum
      quisquam ullam blanditiis dolor recusandae.'
      />
      <Footer />
    </div>
    
  );
};

export default Blog;
