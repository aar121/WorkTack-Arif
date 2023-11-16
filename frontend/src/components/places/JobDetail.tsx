import React, { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

interface Job {
  jobId: string;
}

const JobDetail: FC = () => {
  const { jobId } = useParams<{ jobId: string }>();

  const navigate = useNavigate();

  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/more/${jobId}`);
      const resData = await response.json();
      setJob(resData);
    };
    fetchData();
  }, [jobId]);

  if (job === null) {
    return <h1>Loading</h1>;
  }

  function editJob() {
    navigate(`/more/${job?.jobId}/edit`);
  }

  async function deleteJob() {
    await fetch(`http://localhost:5000/more/${job?.jobId}`, {
      method: 'DELETE'
    });
    navigate('/more');
  }

  return (
    <main>
      <div className="row">
        <div className="editForm">
          <h3></h3>
        </div>
        <div className="editForm">
          <h1>Nonna's Pizza</h1>
          <br />
          <h2>Now Hiring Delivery Drivers and Cashiers!</h2>
          <h3>Call to inquire at +1(123)-567-8910</h3>
          <h4>Located at 166 Park Ave</h4>
          <br />
          <a className="btn btn-warning" onClick={editJob}>
            Edit
          </a>
          <button type="submit" className="btn btn-danger" onClick={deleteJob}>
            Delete
          </button>
        </div>
      </div>
      <hr />
    </main>
  );
};

export default JobDetail;