import React, { useState } from 'react';
import { remark } from 'remark';
import remarkFrontmatter from 'remark-frontmatter';
import remarkExtractFrontmatter from 'remark-extract-frontmatter';

function MarkdownContentExtractor(markdownContent) {
  const [data, setData] = useState({
    title: '',
    author: '',
    content: '',
    coverImage: '',
    excerpt: ''
  });
    const processor = remark()
      .use(remarkFrontmatter)
      .use(remarkExtractFrontmatter, { keys: ['title', 'author', 'coverImage', 'excerpt'] });

    processor.process(markdownContent, (err, file) => {
      if (err) {
        console.error('Error parsing Markdown:', err);
        return;
      }

      const { title, author, coverImage, excerpt } = file.data.frontmatter || {};

      setData({
        title: title || '',
        author: author || '',
        coverImage: coverImage || '',
        excerpt: excerpt || '',
        content: file.contents || ''
      });
    });
  return data;
}

export default MarkdownContentExtractor;
