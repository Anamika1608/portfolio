import React from 'react';
import { Section } from '@/components/ui/Section';
import { blogData } from './BlogData';
import BlogListItem from './BlogListItem';

function Blogs() {
    return (
        <Section title="Writing">
            <div className="divide-y divide-border">
                {blogData.map((blog) => (
                    <BlogListItem
                        key={blog.id}
                        title={blog.title}
                        description={blog.description}
                        imageUrl={blog.imageUrl}
                        blogUrl={blog.blogUrl}
                        date={blog.date}
                        readTimeMinutes={blog.readTimeMinutes}
                    />
                ))}
            </div>
        </Section>
    );
}

export default Blogs;
