import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function More () {
    const [jobs,setJobs] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch ('http://localhost:5001/jobs')
            const resData = await response.json()
            setJobs(resData)

        }
        fetchData()
    },[])

    let jobsFormatted = jobs.map((job) => {
        return(
            <div key={job._id}>
                <h1> 
                {job.business} </h1>
                <a href="#" onClick={() => navigate.push(`/jobs/${job.jobId}`)} >
						{job.name}
					</a>
            </div>
        )
    })
        console.log(jobs)
     return(
       <>
        <h1>More Jobs</h1>
        {jobsFormatted}
        </>    
		)
 }

export default More;