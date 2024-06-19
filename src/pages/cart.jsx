import React, { useEffect, useState } from 'react'

function Cart() {
  const [employee, setEmployee] = useState([])
  useEffect(() => {
    fetch('https://dummy.restapiexample.com/api/v1/employee/1')
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      setEmployee(data)
    })
  }, []);

  return (
    <div className='page'>
      Cart
    </div>
  )
}

export default Cart