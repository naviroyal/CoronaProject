import React from 'react';

export const DistrictWise = (props) => {
    return(
      <div className="table-responsive">
        <table className="table table-sm  table-bordered table-striped ">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Name</th>
              <th scope="col">Confirmed</th>
              <th scope="col">Active</th>
              <th scope="col">Recovered</th>
              <th scope="col">Deaths</th>
            </tr>
          </thead>
          <tbody>
            {
              props.districtWiseData.map(item => (
                <tr >
                  <td>{item.name}</td>
                  <td>{item.confirmed}</td>
                  <td>{item.active}</td>
                  <td>{item.recovered}</td>
                  <td>{item.death}</td>
                </tr>
              ))
            }
            
          </tbody>
        </table>
      </div>
    )
}