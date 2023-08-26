import React from 'react'

function NewComp({data}) {
  return (
    <div className="mt-5 text-white">
        <h1>New Component</h1>
        {
            data.map(i => 
                <div className="text-secondary">
                    <h1>name: {i.name}</h1>
                    <p>age: {i.age}</p>
                </div>
                )
        }
    </div>

  )
}

export default NewComp