import React from "react";
import { AiOutlineMenu } from "react-icons/Ai";
import { MdCreateNewFolder } from "react-icons/Md";
import { IoIosNotificationsOutline } from "react-icons/Io";
import { CiImageOn } from "react-icons/Ci";
import { BiMicrophone } from "react-icons/Bi";
import { ImYoutube2 } from "react-icons/Im";
import { FcSearch } from "react-icons/Fc";

export default function Header({ handleSidebar }) {
  return (
    <div className="container-fluid bg-dark text-white text-align-center">
      <div className="row border p-1 pointer-cursor">
        <div className="col-1">
          <AiOutlineMenu className="bar" onClick={handleSidebar} />
          <ImYoutube2 className="imgcss" />
        </div>

        <div className="offset-2 col-5 my-2">
          <Input />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            fontSize: "20px",
            cursor: "pointer",
          }}
          className="offset-2 col-2 my-2"
        >
          <div>
            {" "}
            <MdCreateNewFolder></MdCreateNewFolder>
          </div>

          <div>
            {" "}
            <IoIosNotificationsOutline></IoIosNotificationsOutline>
          </div>
          <div>
            <CiImageOn></CiImageOn>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ position: "relative" }}>
        <input className="inputcss" type="text" placeholder="Search" />
        <FcSearch className="input-icon" />
      </div>

      <div>
        <BiMicrophone className="Audiocss"></BiMicrophone>
      </div>
    </div>
  );
}
