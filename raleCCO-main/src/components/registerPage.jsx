import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const navigate = useNavigate();
  const [userForm, setUserForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    phonenumber: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!userForm.firstname.trim()) newErrors.firstname = "First name is required";
    if (!userForm.lastname.trim()) newErrors.lastname = "Last name is required";
    if (!userForm.username.trim()) newErrors.username = "Username is required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userForm.email)) {
      newErrors.email = "Invalid email format";
    }

    if (userForm.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(userForm.phonenumber)) {
      newErrors.phonenumber = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      const response = await axios.post("http://localhost:8590/user/register", {
        email: userForm.email,
        username: userForm.username,
        password: userForm.password,
        phoneNumber: userForm.phonenumber,
        userFirstName: userForm.firstname,
        userLastName: userForm.lastname
      });

      if (response.status === 200) {
        const loginResponse = await axios.post("http://localhost:8590/user/login", {
          email: userForm.email,
          password: userForm.password,
        });

        if (loginResponse.status === 200) {
          localStorage.setItem("token", loginResponse.data.token);
          navigate("/components/frontPage");
        }
      }
    } catch (error) {
      setErrors({ submit: "Registration failed. Please try again." });
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden fixed">
      <div className="relative bg-white p-10 w-full h-full">
        <div className="absolute font-bold font-archivo-black text-[12vw] tracking-tighter text-gray-200"
          style={{
            top: "15%",
            left: "49%",
            transform: "translate(-50%, -50%) scaleX(1.4)",
            whiteSpace: "nowrap",
          }}>
          REGISTER
        </div>
        <form onSubmit={handleSubmit}>
          <div className="bg-gray-200 z-10 flex flex-col p-5 mx-[10%] gap-4 rounded-2xl relative top-[16vh] h-auto">
            <div className="text-3xl font-bold mx-auto">CREATE A NEW ACCOUNT</div>
            
            <div>
              <div className="text-lg font-semibold">First Name</div>
              <input 
                type="text" 
                placeholder="First Name" 
                name="firstname"
                value={userForm.firstname}
                onChange={handleChanges} 
                className={`p-2 w-full rounded-xl ${errors.firstname ? 'border-red-500' : ''}`}
              />
              {errors.firstname && <span className="text-red-500 text-sm">{errors.firstname}</span>}
            </div>

            <div>
              <div className="text-lg font-semibold">Last Name</div>
              <input 
                type="text" 
                placeholder="Last Name" 
                name="lastname"
                value={userForm.lastname}
                onChange={handleChanges} 
                className={`p-2 w-full rounded-xl ${errors.lastname ? 'border-red-500' : ''}`}
              />
              {errors.lastname && <span className="text-red-500 text-sm">{errors.lastname}</span>}
            </div>

            <div className="flex flex-row w-full gap-7">
              <div className="w-1/2">
                <div className="text-lg font-semibold">Username</div>
                <input 
                  type="text" 
                  placeholder="Username" 
                  name="username"
                  value={userForm.username}
                  onChange={handleChanges} 
                  className={`p-2 w-full rounded-xl ${errors.username ? 'border-red-500' : ''}`}
                />
                {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
              </div>

              <div className="w-1/2">
                <div className="text-lg font-semibold">Password</div>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={userForm.password}
                    onChange={handleChanges}
                    className={`p-2 w-full rounded-xl ${errors.password ? 'border-red-500' : ''}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
              </div>
            </div>

            <div className="flex flex-row w-full gap-7">
              <div className="w-1/2">
                <div className="text-lg font-semibold">Email Address</div>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  name="email"
                  value={userForm.email}
                  onChange={handleChanges} 
                  className={`p-2 w-full rounded-xl ${errors.email ? 'border-red-500' : ''}`}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>

              <div className="w-1/2">
                <div className="text-lg font-semibold">Phone Number</div>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  name="phonenumber"
                  value={userForm.phonenumber}
                  onChange={handleChanges} 
                  className={`p-2 w-full rounded-xl ${errors.phonenumber ? 'border-red-500' : ''}`}
                />
                {errors.phonenumber && <span className="text-red-500 text-sm">{errors.phonenumber}</span>}
              </div>
            </div>
          </div>

          {errors.submit && (
            <div className="text-red-500 text-center mt-4">{errors.submit}</div>
          )}

          <button 
            type="submit" 
            className="bg-gray-200 z-10 my-4 p-3 grid justify-items-center gap-4 rounded-2xl w-1/3 mx-auto relative top-[16vh] h-auto hover:bg-gray-300 transition-colors"
          >
            <div className="text-2xl">REGISTER</div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;