import React, { Component,useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../../App.css';
import $ from "jquery";
import axios from "axios";

import '../../css/newstyles.css'
import '../../css/styles.css' 
import '../../css/header.css'
import '../../css/services.css'
import '../../css/responsive.css'
import '../../css/style2.css'
//import "./App.css";

import io from "socket.io-client";

import { useCallback } from "react";

const socket = io("http://localhost:3001");

function StudentChat() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const currentUser = window.sessionStorage.getItem("fname");

  const [username, setUserName] = useState(currentUser);
  const [showConfig, setShowConfig] = useState(true);
  const [messages, setMessages] = useState([]); // example: [{user: 'some user',message:'bslah blah'},{user: 'some user',message:'blah blah'}]
  const [lastMessage, setLastMessage] = useState("");
  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
    });
    socket.on("disconnect", () => {
      setIsConnected(false);
    });
    socket.on("message", (newMessage) => {
      const allMessages = JSON.parse(JSON.stringify(messages));
      allMessages.push(newMessage);
      setMessages(allMessages);
    });
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("message");
    };
  }, [messages]);
  const saveUser = useCallback(() => {
    setShowConfig(false);
  }, []);
  const sendMessage = useCallback(() => {
    const newMessage = { user: username, message: lastMessage };
    socket.emit("message", newMessage);
    setMessages([...messages, newMessage]);
    setLastMessage("");
  }, [username, lastMessage]);
  return (
    <div className="App">
      <header  style={{overflowX:"inherit"}} className="header">
    <nav className="navbar">
      <img src="images/logo-escolar.png" width={150} height={40} alt="" />
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="/studenthome" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/services" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="/contactus" className="nav-link">
            Contact us
          </a>
        </li>
        <li className="nav-item">
          <div className="nav-dropdown" id="nav-dropdown">
            <div className="role-title">
              Student
              <i className="fa fa-caret-down" />
            </div>
            <div className="dropdown-content">
              <a href="/studenthome" className="nav-link">
              Student
              </a>
              <a href="/login">Logout</a>
            </div>
          </div>
        </li>
      </ul>
      <div className="hamburger">
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </nav>
  </header>
    <div  style={{overflow:"inherit",fontSize:"2rem"}} className="main-div">
        {isConnected ? <p>Connected</p> : null}

        {/* Config JSX */}
        
          <>
            <div className="messages">
              {messages.map((item, index) => {
                return item.user ? (
                  <p key={`message${index}`}>
                    <b>{item.user}:</b> {item.message}
                  </p>
                ) : null;
              })}
            </div>
            <div className="messageWrapper">
              <input
                value={lastMessage}
                onChange={(e) => setLastMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
              />
            </div>
          </>
        
      </div>
    </div>
  );
}

export default StudentChat;

