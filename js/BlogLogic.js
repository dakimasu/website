function OpenBlog() {
    const Display = document.getElementById("Content"); // Get the elment where we will be displaying the contents, our "Display"
    
    Display.innerHTML = ""; // Clear the container.

    const BlogContainer = document.createElement("div");
    BlogContainer.id = "BlogContainer";

    Display.appendChild(BlogContainer);

    fetch("../json/Blog.json")
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
            json.forEach((post, index) => {
                // This part displays all the posts in a clickable index.

                // Creates title of a post.
                const PostName = document.createElement("h1");
                PostName.innerHTML = post.Name;

                // Adds the date a post was created on.
                const DateDisplay = document.createElement("em");
                DateDisplay.innerHTML = new Date(post.Date).toLocaleString();

                // Creates a container for the index of posts.
                const PostContainer = document.createElement("div");
                PostContainer.id = index;
                // Adds the elements together.
                PostContainer.appendChild(PostName);
                PostContainer.appendChild(DateDisplay);

                // Displays it.
                BlogContainer.appendChild(PostContainer);

                // Adds an onclick event to all posts.
                document.getElementById(index).addEventListener("click", () => {
                    BlogContainer.innerHTML = ""; // Reset BlogContainer.
                    
                    // Goes through each line in the json.
                    post.Content.forEach(line => {

                        // Creates an element for each line.
                        const line_element = document.createElement(line[0]);

                        // Switch for all cases, main formatting config goes here.
                        switch (line[0]) {
                            // Images
                            case "img":
                            
                                line_element.src = line[1];
                                line_element.alt = line[2];

                            break;

                            // Links
                            case "a":
                            
                                line_element.href = line[1];
                                line_element.innerHTML = line[2];

                            break;

                            // Thematic line breaks
                            case "hr":
                                // We do nothing!
                            break;

                            // All others
                            default:
                                line.slice(1).forEach(line_part => {
                                    if (line_part != "\n") {
                                        
                                        line_element.innerHTML += line_part;
                                        
                                    } else {
                                        
                                        line_element.appendChild(document.createElement("br"));

                                    }
            
                                });
                            break;
                        }

                        // Adds the line to the end of the blog container.
                        BlogContainer.appendChild(line_element);

                    });
                });
            });
        });
}