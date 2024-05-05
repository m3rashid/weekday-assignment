import { Job } from "../types";

const jobStyles: Record<string, React.CSSProperties> = {
  card: {
    borderRadius: 16,
    border: "1px solid #eaeaea",
    boxShadow: "2px 2px 2px lightgray",
    minWidth: 320,
    maxWidth: 380,
    padding: 12,
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
  jobRole: { fontWeight: "bold" },
  location: {},
  p: { padding: 0, margin: 0 },
};

function JobCard(job: Job) {
  return (
    <div style={jobStyles.card}>
      <span style={jobStyles.chip}>Posted 13 days ago</span>

      <div style={jobStyles.companyNameDiv}>
        <img style={jobStyles.companyNameInnerImg} src={job.logoUrl} />
        <div style={jobStyles.companyNameInnerDiv}>
          <p style={{ ...jobStyles.p, ...jobStyles.companyName }}>{job.companyName}</p>
          <p style={{ ...jobStyles.p, ...jobStyles.jobRole }}>{job.jobRole}</p>
          <p style={{ ...jobStyles.p, ...jobStyles.location }}>{job.location}</p>
        </div>
      </div>

      <p style={{ ...jobStyles.p }}>
        Estimated Salary: {job.minJdSalary ?? 0} - {job.maxJdSalary ?? 0} {job.salaryCurrencyCode}
      </p>

      <div>
        <p style={{ ...jobStyles.p }}>About Company</p>
        <p style={{ ...jobStyles.p }}>About Us</p>
        <p style={{ ...jobStyles.p }}>{job.jobDetailsFromCompany}</p>
      </div>

      <p style={{ ...jobStyles.p }}>View Job</p>

      <div>
        <p style={{ ...jobStyles.p }}>Minimum Experience</p>
        <p style={{ ...jobStyles.p }}>{job.minExp || 0}</p>
      </div>
    </div>
  );
}

export default JobCard;
