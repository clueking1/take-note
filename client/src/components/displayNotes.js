import React from "react";
import DisplayFolders from '../components/displayFolders'

function DisplayNotes() {
    return (
    <main role="main" className="container">   
        <div className="my-3 p-3 bg-white rounded shadow-sm">
        <h6 className="border-bottom border-gray pb-2 mb-0">Notes</h6>

        <DisplayFolders />
       
        <div className="d-flex justify-content-between align-items-center w-100">
        <small className="d-block text-right mt-3">
          <a href="#">All Folders</a>
        </small>
        <small className="d-block text-left mt-3">
          <a href="#">+Create Folder</a>
        </small>
        </div>
        
       
      
      </div>
    </main>
    )
}

export default DisplayNotes