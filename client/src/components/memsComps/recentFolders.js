import React from 'react'

function ReacentFolders() {
    return (
    <main role="main" class="container recentDiv">


  <div class="my-3 p-3 bg-white rounded shadow-sm">
    <h6 class="border-bottom border-gray pb-2 mb-0">Folders</h6>
    <div class="media text-muted pt-3">

      <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <div class="d-flex justify-content-between align-items-center w-100">
          <strong class="text-gray-dark">Folder 1</strong>
          <a href="#">View</a>
        </div>
      
      </div>
    </div>
    <div class="media text-muted pt-3">

      <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <div class="d-flex justify-content-between align-items-center w-100">
          <strong class="text-gray-dark">Folder 2</strong>
          <a href="#">View</a>
        </div>
 
      </div>
    </div>
    <div class="media text-muted pt-3">

      <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
        <div class="d-flex justify-content-between align-items-center w-100">
          <strong class="text-gray-dark">Folder 3</strong>
          <a href="#">View</a>
        </div>
       
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center w-100">
        <small class="d-block text-right mt-3">
        <a href="#">All Folders</a>
        </small>
        <small class="d-block text-left mt-3">
        <a href="#">+Create Folder</a>
        </small>
    </div>

  </div>
</main>
    )
}

export default ReacentFolders