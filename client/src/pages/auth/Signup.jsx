import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        password: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/user/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            // Check if response is okay (status 200-299)
            if (!response.ok) {
                throw new Error("Registration failed");
            }

            const result = await response.json();
            console.log(result);
            navigate("/login");
        } catch (error) {
            console.error("Error:", error.message); // Error handling
        } finally {
            setFormData({
                email: "",
                name: "",
                password: "",
            });
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "600px" }}>
            <form className="box" onSubmit={handleSubmit}>
                <h1 className="title is-4 has-text-centered">Signup</h1>

                <div className="field">
                    <label className="label">Email Address</label>
                    <div className="control">
                        <input
                            className="input is-half"
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input
                            className="input is-half"
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input
                            className="input is-half"
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div className="control has-text-centered mt-4">
                    <button className="button is-primary">Signup</button>
                </div>
            </form>
        </div>
    );
}
