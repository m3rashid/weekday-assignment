import { Job } from "../../types";
import { capitalize, limitText } from "../../utils/strings";

const jobStyles: Record<string, React.CSSProperties> = {
  card: {
    borderRadius: 16,
    border: "1px solid #eaeaea",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 1px 4px 0px",
    minWidth: 200,
    maxWidth: 380,
    padding: 24,
    transition: "color 0.15s ease, border-color 0.15s ease",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  chip: {
    border: "1px solid #eaeaea",
    borderRadius: 16,
    fontSize: 12,
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    width: "fit-content",
  },
  companyNameDiv: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
  },
  companyNameInnerImg: {
    height: 44,
    width: 44,
    borderRadius: 8,
  },
  companyNameInnerDiv: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  companyName: {
    color: "gray",
    fontWeight: "bold",
  },
  jobRole: { fontWeight: "semibold" },
  location: {},
  p: { padding: 0, margin: 0, paddingTop: 4 },
  aboutUs: { fontWeight: 900 },
  viewJob: { color: "blue", textAlign: "center", marginTop: -30 },
  easyApplyButton: {
    backgroundColor: "rgb(85, 239, 196)",
    padding: 16,
    borderRadius: 8,
    cursor: "pointer",
    border: "none",
    fontSize: 16,
    fontWeight: "bold",
  },
};

function JobCard(job: Job) {
  return (
    <div style={jobStyles.card}>
      <span style={jobStyles.chip}>⌛ Posted 13 days ago</span>

      <div style={jobStyles.companyNameDiv}>
        <img style={jobStyles.companyNameInnerImg} src={job.logoUrl} />
        <div style={jobStyles.companyNameInnerDiv}>
          <p style={{ ...jobStyles.p, ...jobStyles.companyName }}>{capitalize(job.companyName)}</p>
          <p style={{ ...jobStyles.p, ...jobStyles.jobRole }}>{capitalize(job.jobRole)}</p>
          <p style={{ ...jobStyles.p, ...jobStyles.location }}>{capitalize(job.location)}</p>
        </div>
      </div>

      <p style={{ ...jobStyles.p, color: "gray" }}>
        Estimated Salary: {job.minJdSalary ?? 0} - {job.maxJdSalary ?? 0} {job.salaryCurrencyCode} ✅
      </p>

      <div style={{ mask: "linear-gradient(#000, #0000)" }}>
        <p style={{ ...jobStyles.p, fontWeight: 600 }}>About Company:</p>
        <p style={{ ...jobStyles.p, ...jobStyles.aboutUs }}>About Us</p>
        <p style={{ ...jobStyles.p }}>{limitText(job.jobDetailsFromCompany, 300)}</p>
      </div>

      <p style={{ ...jobStyles.p, ...jobStyles.viewJob }}>View Job</p>

      <div>
        <p style={{ ...jobStyles.p, fontWeight: "bold", color: "gray" }}>Minimum Experience</p>
        <p style={{ ...jobStyles.p }}>{job.minExp || 0} years</p>
      </div>

      <button style={jobStyles.easyApplyButton}>⚡ Easy Apply</button>
    </div>
  );
}

export default JobCard;
