"use client"
import { useState } from "react";
import Formain from "../server-main-side";

export default function Mainform({ onClose }) {
  return (
      <div className="newcontainer">
        <form className="newform" action="">
          <Formain />
          <div className="btn">
            <button onClick={onClose}>Discard</button>
            <div className="btn-end">
              <button>Save as Draft</button>
              <button>Save & Send</button>
            </div>
          </div>
        </form>
      </div>
  )
}