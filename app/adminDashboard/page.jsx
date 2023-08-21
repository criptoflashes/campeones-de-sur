"use client"

import { useState, useEffect } from "react"
import { useRouter, useParams } from "next/navigation"



function AdminDashboard() {

  


  let [newProduct, setNewProduct] = useState({
    title: "",
    category: "",
    description: ""
  })

  const params = useParams()
  const router = useRouter()


  //POST product
  const createProduct = async () => {
    try {
      const res = await fetch('api/quesos/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct),
       
      })
      const data = await res.json()

  
        router.push('/adminProducts')
        router.refresh()
      
      console.log(data)
    } catch (error) {
      console.log(error.message)
    }
  }




  const handleDelete = async () => {
    if (window.confirm("¿Estás seguro de borrar este producto?")) {
      try {
        const res = await fetch(`/api/quesos/${params.id}`, {
          method: "DELETE",
        })
        router.push('/adminProducts')
        router.refresh()

      } catch (error) {
        console.log(error)
        router.push('/adminProducts')
        router.refresh()
      }
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


 /*  useEffect(() => {
    if (params.id) {
      getTask();
    }
  }, []) */


  return (
    <div className="h-screen flex justify-center items-center">

      <form onSubmit={handleSubmit} >
        <header className="flex justify-between">

          <h1 className="font-bold text-3xl">{
            !params.id ? "Crea un producto" : "Edita un producto"
          }</h1>
          <button type="button" className="bg-red-500 px-3 pt-1 rounded-md" onClick={handleDelete}>
            Borrar producto
          </button>


        </header>
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


        <textarea name="description" placeholder="Descripción" className="bg-gray-300 border-2 w-full p-4 rounded-lg my-4" rows={3} onChange={handleChange} > </textarea>
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold px-4  py-2 rounded-lg">Guardar</button>

      </form>

    </div>
  )
}

export default AdminDashboard
