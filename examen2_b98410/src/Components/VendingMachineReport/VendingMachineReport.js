import React from 'react'
import "./VendingMachineReport.css";

export const VendingMachineReport = (props) => {
  return (
    <div className="vending-machine-cost-panel">
              {`${props.tag}: ${props.data}`}
            </div>
  )
}