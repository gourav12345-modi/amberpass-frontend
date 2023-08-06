import React from 'react'
import '../styles/dashboard.css'
import { BsThreeDots } from 'react-icons/bs'
import { BiChevronDown } from 'react-icons/bi'
import AreaChart from './AreaChart'
import Table from './Table'
import { GoUpload } from 'react-icons/go'

function Dashboard() {
  const barChartFillHeight = ['20%', '100%', '20%', '100%', '60%', '80%', '60%', '90%']
  return (
    <div className="dashboard">
      <div className="container">
        <div className="analytics-wrapper">
          <div className="left">
            <div className="income analytics-left">
              <div className="header">
                <p className="heading">Total Income</p>
                <BsThreeDots />
              </div>
              <div className="value-container">
                <p className="value">$124,563.00</p>
                <p className="percent">+6.9%</p>
              </div>
              <div className="line-bar">
                <div className="filled">

                </div>
              </div>
              <p className="time">Yearly Goal</p>
            </div>

            <div className="users analytics-left">
              <div className="header">
                <p className="heading">Total Users</p>
                <BsThreeDots />
              </div>
              <div className="value-container">
                <p className="value">94.2%</p>
                <p className="percent">+6.9%</p>
              </div>
              <div className="graph">
                {
                  barChartFillHeight.map((height) => (
                    <div className="bar">
                      <div className="filled" style={{ height }}>

                      </div>
                    </div>
                  ))
                }
              </div>
            </div>


          </div>
          <div className="right">
            <div className="header">
              <p className="heading">Balance</p>
              <select>
                <option defaultValue>Monthly    <BiChevronDown /></option>
                <option value="yearly">Yearly    <BiChevronDown /></option>
              </select>
            </div>

            <div className="stats">
              <div className="stat">
                <p className="heading">Earning</p>
                <div className="value-container">
                  <p className="value">43.41%</p>
                  <p className="percent">+2.5%</p>
                </div>
              </div>
              <div className="stat">
                <p className="heading">Sales Value</p>
                <div className="value-container">
                  <p className="value">$95,422</p>
                  <p className="percent">+13.5%</p>
                </div>
              </div>
            </div>

            <AreaChart />

          </div>

        </div>
        <div className="table-header-wrapper">
          <div className="header-wrapper">
            <p className="heading">Recent Transactions</p>
            <button><GoUpload className="icon" />Export</button>
          </div>
          <div className="tab">
            <p>Incoming</p>
            <p>Invoices</p>
          </div>
        </div>
        <Table />
      </div>
    </div>
  )
}

export default Dashboard