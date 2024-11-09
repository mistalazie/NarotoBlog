import { useState, useEffect } from "react";
import axios from "axios";
import TopBar from "../components/TopBar";

const Gallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const apiCall = async () => {
            try {
                const response = await axios.get("http://localhost:3000/gallery");
                console.log(response);
                if (response.data && response.data.images) {
                    setImages(response.data.images);
                } else {
                    console.error("Expected an array of images but got:", response.data);
                }
            } catch (error) {
                console.error("Error fetching images:", error);
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
                {/* Display images */}
                <div className="gallery">
                    {images.length > 0 ? (
                        images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Gallery Image ${index + 1}`}
                            />
                        ))
                    ) : (
                        <p>No images available</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Gallery;
