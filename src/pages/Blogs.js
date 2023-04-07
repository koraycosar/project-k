import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";
import Cookies from "universal-cookie";

const Blogs = () => {
    const cookies = new Cookies();
    const navigate = useNavigate();

    const fetchBlogs = useCallback(async () => {
        try {
            const response = await fetch(
                "https://project-k-fb0f4-default-rtdb.firebaseio.com/blogs.json"
            );
            if (!response.ok) {
                throw new Error("Something went wrong!");
            }

            const data = await response.json();

            if (false && !data) {
                const response = await fetch(
                    "https://project-k-fb0f4-default-rtdb.firebaseio.com/blogs.json",
                    {
                        method: "POST",
                        body: JSON.stringify({
                            title: "Blog title",
                            description: "Blog description",
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                const postData = await response.json();
                console.log(postData);
            } else {
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }, []);

    const userName = cookies.get("projectKUserName");

    useEffect(() => {
        if (!userName) {
            navigate("/");
        } else {
            fetchBlogs();
        }
    }, [userName, fetchBlogs, navigate]);

    return <div>Blogs</div>;
};

export default Blogs;
