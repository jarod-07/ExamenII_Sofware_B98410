import React from 'react'
import "./ChangeSummary.css";

export const ChangeSummary = (props) => {
  return (
    <>
    <div className="table-change">
    <div>{`Su vuelto es de ${props.change} colones.`}</div>
    <br></br>
    <table>
      <thead>
        <tr>
          <th>Desglose:</th>
        </tr>
      </thead>
      <tbody>
        {props.changeSumary.map((element) => (
          <tr key={element.coin}>
            <td>
              {element.count} modedas de {element.coin}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <br></br>
    <br></br>
    <br></br>
  </div>
  </>
  )
}
