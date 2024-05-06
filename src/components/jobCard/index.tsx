import { Job } from "../../types";
import jobStyles from "./jobcard.module.css";
import { capitalize, limitText } from "../../utils/strings";

function JobCard(job: Job) {
  return (
    <div className={jobStyles.card}>
      {/* Hardcoded because the API doesn't have this data */}
      <span className={jobStyles.chip}>⌛ Posted 13 days ago</span>

      <div className={jobStyles.companyNameDiv}>
        <img className={jobStyles.companyNameInnerImg} src={job.logoUrl} />
        <div className={jobStyles.companyNameInnerDiv}>
          <p className={jobStyles.companyName}>{capitalize(job.companyName)}</p>
          <p className={jobStyles.jobRole}>{capitalize(job.jobRole)}</p>
          <p className={jobStyles.location}>{capitalize(job.location)}</p>
        </div>
      </div>

      <p style={{ color: "gray" }}>
        Estimated Salary: {job.minJdSalary ?? 0} - {job.maxJdSalary ?? 0} {job.salaryCurrencyCode} ✅
      </p>

      <div style={{ mask: "linear-gradient(#000, #0000)" }}>
        <p style={{ fontWeight: 600 }}>About Company:</p>
        <p className={jobStyles.aboutUs}>About Us</p>
        <p>{limitText(job.jobDetailsFromCompany, 300)}</p>
      </div>

      <p className={jobStyles.viewJob}>View Job</p>

      <div>
        <p style={{ fontWeight: "bold", color: "gray" }}>Minimum Experience</p>
        <p>{job.minExp || 0} years</p>
      </div>

      <button className={jobStyles.easyApplyButton}>⚡ Easy Apply</button>
    </div>
  );
}

export default JobCard;
