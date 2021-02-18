import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";

import { motion, AnimateSharedLayout } from "framer-motion";

export default function Home() {
  const [stateOpen, setOpen] = useState(false);

  function handleToggle() {
    setOpen(!stateOpen);
    console.log(stateOpen);
  }
  return (
    <div className={styles.container}>
      <AnimateSharedLayout type="crossfade">
        <motion.div layout className={styles.wrapper}>
          {stateOpen ? (
            <div>
              {" "}
              <motion.div
                layoutId="data"
                className={styles.card}
                onClick={handleToggle}
              ></motion.div>
            </div>
          ) : (
            <>
              <motion.div
                layoutId="data"
                className={styles.card_big}
                onClick={handleToggle}
              ></motion.div>
            </>
          )}
        </motion.div>
      </AnimateSharedLayout>
    </div>
  );
}
