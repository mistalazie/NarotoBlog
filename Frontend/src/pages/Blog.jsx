import React, { useState, useEffect } from "react";
import axios from "axios";
import TopBar from "../components/TopBar";

function Blog() {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiCall = async () => {
            try {
                const response = await axios.get("http://localhost:3000");
                console.log("Full response:", response.data);

                setBlogs(response.data);
                setError(null);
            } catch (error) {
                setError("Error fetching data");
                console.error("API call error:", error);
            }
        };
        apiCall();
    }, []);

    return (
        <>
            <div>
                <TopBar />
            </div>
            <div>
                {/* Display error message if any */}
                {error && <p>{error}</p>}

                {/* Display list of blogs */}
                {blogs.length > 0
                    ? blogs.map((blog) => (
                        <div key={blog._id}>
                            <h2>{blog.title}</h2>
                            <p>{blog.content}</p>
                        </div>
                    ))
                    : !error && <p>No data available</p>}
            </div>
        </>

    );
}

export default Blog;
