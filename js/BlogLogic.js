function OpenBlog() {
    const Display = document.getElementById("Content"); // Get the elment where we will be displaying the contents, our "Display"
    
    Display.innerHTML = ""; // Clear the container.

    const BlogContainer = document.createElement("div");
    BlogContainer.id = "BlogContainer";

    Display.appendChild(BlogContainer);

    fetch("../pages/blog/Blog.json")
        .then((response) => response.json())
        .then((json) => {
            json.forEach((post, index) => {
                const PostName = document.createElement("h1");
                PostName.innerHTML = post.Name;

                const DateDisplay = document.createElement("em");
                DateDisplay.innerHTML = new Date(post.Date).toLocaleString();

                const PostContainer = document.createElement("div");
                PostContainer.id = index;
                PostContainer.appendChild(PostName);
                PostContainer.appendChild(DateDisplay);

                BlogContainer.appendChild(PostContainer);

                document.getElementById(index).addEventListener("click", () => {
                    BlogContainer.innerHTML = ""; // Reset BlogContainer.
                    
                    post.Content.forEach(line => {
                        const LineSplit = line.split(/#(.*)/s);
                        
                        const Element = document.createElement(LineSplit[0]);

                        switch (LineSplit[0]) {
                            case "img":
                                Element.src = LineSplit[1].split(/!(.*)/s)[0];
                                Element.alt = LineSplit[1].split(/!(.*)/s)[1];
                                break;
                                
                            case "a":
                                Element.href = LineSplit[1].split(/!(.*)/s)[0];
                                Element.innerHTML = LineSplit[1].split(/!(.*)/s)[1];
                                break;
                            
                            default:
                                if (LineSplit[1].includes("\n")) {
                                    BlogContainer.appendChild(document.createElement("br"));
                                }
                                Element.innerHTML = LineSplit[1];
                                break;
                        }
                        
                        BlogContainer.appendChild(Element);
                    })
                });
            });
        });
}