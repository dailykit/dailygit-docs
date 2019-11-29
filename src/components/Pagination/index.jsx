import React from "react";
import { Link } from "gatsby";

import styles from "./style.module.css";

import { ArrowLeft, ArrowRight } from "../assets/svgs";

const Pagination = ({ prev, next }) => {
  return (
    <div className={styles.pagination}>
      {prev && (
        <Link to={prev.link}>
          <div className={styles.card}>
            <ArrowLeft color="#AFA4A4" />
            <div>
              <span>Previous</span>
              <h3>{prev.name}</h3>
            </div>
          </div>
        </Link>
      )}
      {next && (
        <Link to={next.link}>
          <div className={styles.card}>
            <div>
              <span>Next</span>
              <h3>{next.name}</h3>
            </div>
            <ArrowRight color="#AFA4A4" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
