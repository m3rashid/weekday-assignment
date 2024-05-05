import { Job } from "../types";
import styles from "./jobcard.module.css";

function JobCard(job: Job) {
  return (
    <div className={styles.card}>
      <p>{job.companyName}</p>
      <p>{job.salaryCurrencyCode}</p>
    </div>
  );
}

export default JobCard;
