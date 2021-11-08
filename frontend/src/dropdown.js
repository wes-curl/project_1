import React from "react";
import styles from "./homepage.module.css";

function DropDown(){
   return( <div className={styles.dropdown}>
       <select>
      <option> Professor </option>
      <option> Class </option>
      </select>
      </div>
   )
   }
   export default DropDown;