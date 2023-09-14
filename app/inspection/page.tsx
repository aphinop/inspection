"use client";

import Link from "next/link";
import React, { useRef, useEffect } from "react";

export default function Inspection() {

  return (
    <div>
      <h1>Inspection</h1>
      <div>
        <Link href="/inspection/camera" target="_blank" rel="noopener noreferrer">
          <button className="btn btn-accent">Open Camera</button>
        </Link>
      </div>
    </div>
  )
}
