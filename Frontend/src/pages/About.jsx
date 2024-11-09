import React, { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "../components/TopBar";

const About = () => {
    const [about, setAbout] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiCall = async () => {
            try {
                const response = await axios.get("http://localhost:3000/about");
                setAbout(response.data);
                setError(null);
            } catch (error) {
                setError("Error fetching data");
                console.error("API call error");
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
                {error && <p>{error}</p>}
                {about ? (
                    <div>
                        <h1>{about.tagline}</h1>
                        <h2>{about.title}</h2>
                        <p>{about.introduction}</p>

                        {about.sections && about.sections.length > 0 && (
                            <div>
                                {about.sections.map((section, index) => (
                                    <div key={index}>
                                        <h3>{section.title}</h3>
                                        <p>{section.content}</p>
                                    </div>
                                ))}
                            </div>
                        )}

                        <p>{about.closing}</p>
                    </div>
                ) : (
                    !error && <p>No data available</p>
                )}
            </div>
        </>
    );
};

export default About;
