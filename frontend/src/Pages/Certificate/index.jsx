import { useState } from "react";
import CertificateGenerator from "../../components/Certificate/certificate.jsx";

function Certificate() {
  const [details, setDetails] = useState({
    name: "",
    course: "",
  });

  const handleChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="text-center">
      <h1>Certificate Generator</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="block my-2"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="course">Course Name:</label>
        <input
          type="text"
          name="course"
          placeholder="Enter your course"
          className="block my-2"
          onChange={handleChange}
        />
      </form>
      <CertificateGenerator name={details.name} course={details.course} />
    </div>
  );
}

export default Certificate;
