"use client";

import React, { useEffect, useRef, useState } from "react";
import CameraLayout from "./layout";

export default function Camera() {
  const [cameraActive, setCameraActive] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  async function startVideoStream() {
    const devices = await navigator.mediaDevices.enumerateDevices();
    if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 493 },
          height: { ideal: 369.66 },
          facingMode: "environment"
        }
      })
        .then(stream => {
          const video = videoRef.current;
          if (video) {
            video.srcObject = stream;
            video.play();
          } else {
            console.error('ไม่พบออบเจ็กต์ videoRef.current');
          }
        })
        .catch(error => {
          console.error('การเข้าถึงอุปกรณ์ล้มเหลว:', error);
        });
    }

  }


  const stopVideoStream = (stream: MediaStream | null) => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  useEffect(() => {
    // เริ่มสตรีมวิดีโอเมื่อกล้องเปิด
    if (cameraActive) {
      startVideoStream();
    } else {
      // หยุดสตรีมวิดีโอเมื่อกล้องปิด
      stopVideoStream(videoRef.current?.srcObject as MediaStream);
    }

    return () => {
      // แน่ใจว่ากล้องหยุดทำงานเมื่อคอมโพเนนต์ถูก unmount
      stopVideoStream(videoRef.current?.srcObject as MediaStream);
    };
  }, [cameraActive]);

  // ปิดกล้องเมื่อเปลี่ยนหน้า
  useEffect(() => {
    const handleRouteChange = () => {
      console.log(">>> handleRouteChange");
      if (cameraActive) {
        stopVideoStream(videoRef.current?.srcObject as MediaStream);
      }
    };
    // ฟังเหตุการณ์ onRouteChange
    window.addEventListener("routeChange", handleRouteChange);

    // ลบฟังเหตุการณ์ onRouteChange เมื่อ component unmount
    return () => {
      window.removeEventListener("routeChange", handleRouteChange);
    };
  }, []);


  return (
    <CameraLayout>
      <button onClick={() => setCameraActive(prevState => !prevState)}>
        {cameraActive ? "ปิดกล้อง" : "เปิดกล้อง"}
      </button>
      <div className="box">
        <video ref={videoRef} style={{ maxWidth: "100%", height: "auto" }}></video>
        <img
          src="../../meetingroom1.jpg"
          className="img-bg"
        />
      </div>
    </CameraLayout>
  )
}