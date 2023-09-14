"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Camera() {
  const [cameraActive, setCameraActive] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {


    if (cameraActive) {
      // เริ่มสตรีมวิดีโอเมื่อกล้องเปิด
      startVideoStream();
    } else {
      // หยุดสตรีมวิดีโอเมื่อกล้องปิด
      stopVideoStream(videoRef.current?.srcObject as MediaStream);
    }
    

  }, [cameraActive]);

  const startVideoStream = () => {
    navigator.mediaDevices.getUserMedia({
      video: {
        width: { ideal: 493 },
        height: { ideal: 369.66 }
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
  };

  const stopVideoStream = (stream: MediaStream | null) => {
    if (stream) {
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
    }
  };

  return (
    <div className="box">
      {cameraActive && <video ref={videoRef} style={{ maxWidth: "100%", height: "auto" }}></video>}
      <img
        src="../../meetingroom1.jpg"
        className="img-bg"
      />
      <button onClick={() => setCameraActive(prevState => !prevState)}>
        {cameraActive ? "ปิดกล้อง" : "เปิดกล้อง"}
      </button>
    </div>
  );
}
