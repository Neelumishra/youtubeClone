import React from 'react'
import { AiOutlineHome, AiOutlineHistory, AiOutlineLike } from "react-icons/Ai";
import { SiYoutubemusic } from "react-icons/Si";
import {
  MdSubscriptions,
  MdVideoLibrary,
  MdOndemandVideo,
} from "react-icons/Md";
import { BsClockHistory } from "react-icons/Bs"


export default function Sidebar({ sidebarOpen }) {
  return (
    <>
      {sidebarOpen && (
        <div className="sidebar bg-dark text-white p-1">
          <ul type="none">
            <li>
              <AiOutlineHome className="me-3" />
              <strong>Home</strong>
            </li>
            <li>
              <SiYoutubemusic className="me-3" />
              <strong>Shorts</strong>
            </li>
            <li>
              <MdSubscriptions className="me-3" />
              <strong>Subscription</strong>
            </li>
            <hr />
            <li>
              <MdVideoLibrary className="me-3" />
              <strong>Libary</strong>
            </li>
            <li>
              <AiOutlineHistory className="me-3" />
              <strong>History</strong>
            </li>
            <li>
              <MdOndemandVideo className="me-3" />
              <strong>Your Vidoe</strong>
            </li>
            <li>
              <BsClockHistory className="me-3" />
              <strong>Watch Later</strong>
            </li>
            <li>
              <AiOutlineLike className="me-3" />
              <strong>Liked video</strong>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
