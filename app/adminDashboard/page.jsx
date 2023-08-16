"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"



function FormPage() {
  let [newProduct, setNewProduct] = useState({
    title: "",
    category: "",
    description: ""
  })


  const router = useRouter()

  //POST product
  const createProduct = async () => {
    try {
      const res = await fetch('api/quesos/', {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const data = await res.json()

      if(res.status === 200){
      router.push('/')
    }
    console.log(data)
    } catch (error) {
      console.log(error.message)

    }
  }


  //Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    createProduct()
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    console.log(e.target.name)
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value })

  }



  return (
    <div className="h-screen flex justify-center items-center">

      <form onSubmit={handleSubmit} >

      <h1 className="font-bold text-3xl">Crea un producto</h1>
        <input type="text" name="title" placeholder="Título" className="bg-gray-300 border-2 w-full p-4 rounded-lg my-4" onChange={handleChange} />


        <select name="category" className="bg-gray-300 border-2 w-1/2 p-4 rounded-lg my-4" onChange={handleChange}>
          <optgroup>
            <option disabled selected>Selecciona una categoría</option>


            <option value="Queso">Queso</option>
            <option value="Chorizo">Chorizo</option>
            <option value="Yerba">Yerba</option>
            <option value="Manteca">Manteca</option>
            <option value="Ajo">Ajo</option>
            <option value="Miel">Miel</option>
            <option value="Otros">Otros</option>
          </optgroup>
        </select>

        <textarea name="description" placeholder="Descripción" className="bg-gray-300 border-2 w-full p-4 rounded-lg my-4" rows={3} onChange={handleChange}> </textarea>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold px-4  py-2 rounded-lg">Guardar</button>

      </form>
    </div>
  )
}

export default FormPage
