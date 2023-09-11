"use client";

import React, { useEffect, useRef } from "react";

export default function Inspection() {

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const getVideo = () => {
    // เรียกใช้ API ของ navigator.mediaDevices เพื่อเข้าถึงอุปกรณ์ที่เปิดใช้งานได้
    navigator.mediaDevices.getUserMedia({
      video: {
        width: { ideal: 493 },  // กำหนดความกว้างของวิดีโอ
        height: { ideal: 369.66 }   // กำหนดความสูงของวิดีโอ
      }
    })
      .then(stream => {
        const video = videoRef.current;
        if (video) { // ตรวจสอบว่า video ไม่ใช่ null ก่อนที่จะใช้งาน
          video.srcObject = stream;
          video.play();
        } else {
          console.error('ไม่พบออบเจ็กต์ videoRef.current');
        }
      })
      .catch(function (error) {
        // จัดการกับข้อผิดพลาดที่เกิดขึ้น
        console.error('การเข้าถึงอุปกรณ์ล้มเหลว:', error);
      });
      
  }

  useEffect(() => {
    getVideo();
  }, [videoRef])

  const css = `
    .img-bg {
      position: absolute;
      opacity: 0.5;
    }
`

  return (
    <div>
      <h1>Inspection</h1>
      <div className="w-11, h-96">
        <div className="box">
          <video ref={videoRef} style={{ maxWidth: "100%", height: "auto" }}></video>
          <img
            src="meetingroom1.jpg"
            className="img-bg"
          />

        </div>
        <div>
          <button className="btn btn-accent">Open Camera</button>
        </div>

      </div>
    </div>
  )
}