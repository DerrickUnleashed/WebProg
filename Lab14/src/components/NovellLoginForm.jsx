import React, { useState } from "react";

const NovellLoginForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        city: "",
        server: "",
        role: "",
        services: {
            mail: false,
            payroll: false,
            selfService: false,
        },
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData((prevState) => ({
                ...prevState,
                services: {
                    ...prevState.services,
                    [name]: checked,
                },
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
    };

    const handleReset = () => {
        setFormData({
            username: "",
            password: "",
            city: "",
            server: "",
            role: "",
            services: {
                mail: false,
                payroll: false,
                selfService: false,
            },
        });
    };

    return (
        <>
            <h1>Question 2</h1>

            <form
                onSubmit={handleSubmit}
                style={{ width: "300px", margin: "auto", textAlign: "left" }}
            >
                <h2 style={{ textAlign: "center" }}>Novell Services Login</h2>

                <label>
                    Username:{" "}
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Password:{" "}
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    City of Employment:{" "}
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </label>
                <br />

                <label>
                    Web server:
                    <select
                        name="server"
                        value={formData.server}
                        onChange={handleChange}
                    >
                        <option value="">-- Choose a server --</option>
                        <option value="Server1">Server 1</option>
                        <option value="Server2">Server 2</option>
                    </select>
                </label>
                <br />
                <br />

                <div>Please specify your role:</div>
                <label>
                    <input
                        type="radio"
                        name="role"
                        value="Admin"
                        checked={formData.role === "Admin"}
                        onChange={handleChange}
                    />{" "}
                    Admin
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="role"
                        value="Engineer"
                        checked={formData.role === "Engineer"}
                        onChange={handleChange}
                    />{" "}
                    Engineer
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="role"
                        value="Manager"
                        checked={formData.role === "Manager"}
                        onChange={handleChange}
                    />{" "}
                    Manager
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="role"
                        value="Guest"
                        checked={formData.role === "Guest"}
                        onChange={handleChange}
                    />{" "}
                    Guest
                </label>
                <br />
                <br />

                <div>Single Sign-on to the following:</div>
                <label>
                    <input
                        type="checkbox"
                        name="mail"
                        checked={formData.services.mail}
                        onChange={handleChange}
                    />{" "}
                    Mail
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="payroll"
                        checked={formData.services.payroll}
                        onChange={handleChange}
                    />{" "}
                    Payroll
                </label>
                <br />
                <label>
                    <input
                        type="checkbox"
                        name="selfService"
                        checked={formData.services.selfService}
                        onChange={handleChange}
                    />{" "}
                    Self-service
                </label>
                <br />
                <br />

                <button type="submit">Login</button>
                <button
                    type="button"
                    onClick={handleReset}
                    style={{ marginLeft: "10px" }}
                >
                    Reset
                </button>
            </form>
        </>
    );
};

export default NovellLoginForm;
