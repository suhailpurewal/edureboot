import React, { Component } from 'react';
import classNames from 'classnames';
import './Sidebar.css';


const Sidebar = () => 
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">


            <li>
                <a href="/teacherclass/dashboard">
                    <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
                </a>
              </li>

              <li>
                <a href="/teacherclass/gradebook">
                    <i className="fa fa-table fa-fw" /> &nbsp;Grade Book
                </a>
              </li>
              <li>
                <a href=""  >
                    <i className="fa fa-folder-o fa-fw" /> &nbsp;Assingments
                </a>
              </li>
              <li>
                <a href=""  >
                    <i className="fa fa-edit fa-fw" /> &nbsp;Create Assingment
                </a>
              </li>

            
          </ul>
        </div>
      </div>
      


export default Sidebar;
