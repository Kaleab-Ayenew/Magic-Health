import React from "react";
import ContentSection from "../public/ContentSection";
import "./blog.css";
export default function Blog() {
  React.useEffect(() => {
    document.title = "Blog - Better Health";
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class="blog__container">
      <ContentSection class="blog-section">
        <h2>Welcome to the Beaker Health Blog</h2>
        <p>
          This would have been a nice blog, but we don't have any content yet!
        </p>
      </ContentSection>
    </div>
  );
}
