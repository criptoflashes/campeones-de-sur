"use client"
import axios from "axios";
import { useState, useEffect, useRef } from "react"
import { useRouter, useParams } from "next/navigation"


export const dynamic = 'force-dynamic';

function AdminDashboard() {


  let [newProduct, setNewProduct] = useState({
    title: "",
    category: "",
    description: ""
  })

  const [file, setFile] = useState()

  const params = useParams()
  const router = useRouter()
  const formRef = useRef()

  const handleChange = (e) => {
    console.log(e.target.value)
    console.log(e.target.name)
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value })

  }


  //Submit
  const handleSubmit = (e) => {
    e.preventDefault()
    createProduct()
  }


  //POST product
  const createProduct = async () => {
    try {
      const formData = new FormData()
      formData.append("title", newProduct.title);
      formData.append("category", newProduct.category)
      formData.append("description", newProduct.description)

      if (file) {
        formData.append("image", file)
      }

      if (!params.id) {
        const res = await axios.post("/api/quesos", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        })
      } else {
        const res = await axios.put("/api/quesos" + params.id, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
      }
      console.log(formData)
      formRef.current.reset();

      router.refresh()
      router.push('/adminProducts')

      /* console.log(data) */
      /*  return NextResponse.json({ data }) */


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
        router.refresh()
        router.push('/adminProducts')

        console.log(res)
      } catch (error) {
        console.log(error)
        router.refresh()
        router.push('/adminProducts')

      }
    }
  }




  /*   const handleInputFiles = async (e) => {
      const files = e.target.files;
      const newFiles = [...files].filter(file => {
        if (file.size < 1024 * 1024 && file.type.startsWith('image/')) {
          //only accepts less than 1mb
          return file
        }
      })
      setFiles(prev => [...newFiles, ...prev])
    } */


  /*   useEffect(() => {
    console.log(params.id, "hey")
    }, []) */


  return (

    <div>
      <div className="h-screen flex justify-center items-center">

        <form action="" onSubmit={handleSubmit} ref={formRef}>
          <header className="flex justify-between">

            <h1 className="font-bold text-3xl">{
              !params.id ? "Crea un producto" : "Edita un producto"
            }</h1>
            <button type="button" className="bg-red-500 px-3 rounded-md" onClick={handleDelete}>
              Borrar producto
            </button>


          </header>
          <textarea type="text" name="title" placeholder="Título" className="bg-gray-300 border-2 w-full p-4 rounded-lg my-4" onChange={handleChange}></textarea>


          <select name="category" className="bg-gray-300 border-2 w-1/2 p-4 rounded-lg my-4" onChange={handleChange}>
            <optgroup>
              <option disabled>Selecciona una categoría</option>


              <option value="Queso">Queso</option>
              <option value="Chorizo">Chorizo</option>
              <option value="Yerba">Yerba</option>
              <option value="Manteca">Manteca</option>
              <option value="Ajo">Ajo</option>
              <option value="Miel">Miel</option>
              <option value="Otros">Otros</option>
            </optgroup>
          </select>

          <input
            type="file"
            className="shadow appearance-none border rounded w-full py-2 px-3 mb-2"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />


          <input type="text" name="description" placeholder="Descripción" className="bg-gray-300 border-2 w-full p-4 rounded-lg my-4" rows={3} onChange={handleChange} />
          <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold px-4  p-2 rounded-lg">Guardar</button>
        </form>
      </div>


      {/* preview images */}
      <div className="flex justify-center items-center pb-3">
        {file && (
          <img
            className="w-96 object-contain mx-auto my-4"
            src={URL.createObjectURL(file)}
            alt=""
          />
        )}
      </div>

    </div>

  )
}



export default AdminDashboard




/* "use client"

import { useState, useEffect } from "react"
import { useRouter , useParams } from "next/navigation"


export const dynamic = 'force-dynamic';

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

        router.refresh()
        router.push('/adminProducts')
        
   
      
      
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
        router.refresh()
        router.push('/adminProducts')
     
       console.log(res)
      } catch (error) {
        console.log(error)
        router.refresh()
        router.push('/adminProducts')
        
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


   useEffect(() => {
  console.log(params.id, "hey")
  }, []) 


  return (
    <div className="h-screen flex justify-center items-center">

      <form onSubmit={handleSubmit} >
        <header className="flex justify-between">

          <h1 className="font-bold text-3xl">{
           / !params.id ? "Crea un producto" : "Edita un producto"
          }</h1>
          <button type="button" className="bg-red-500 px-3 pt-1 rounded-md" onClick={handleDelete}>
            Borrar producto
          </button>


        </header>
        <textarea type="text" name="title" placeholder="Título" className="bg-gray-300 border-2 w-full p-4 rounded-lg my-4" onChange={handleChange}></textarea>


        <select name="category" className="bg-gray-300 border-2 w-1/2 p-4 rounded-lg my-4" onChange={handleChange}>
          <optgroup>
            <option disabled>Selecciona una categoría</option>


            <option value="Queso">Queso</option>
            <option value="Chorizo">Chorizo</option>
            <option value="Yerba">Yerba</option>
            <option value="Manteca">Manteca</option>
            <option value="Ajo">Ajo</option>
            <option value="Miel">Miel</option>
            <option value="Otros">Otros</option>
          </optgroup>
        </select>


        <input  type="text" name="description"   placeholder="Descripción" className="bg-gray-300 border-2 w-full p-4 rounded-lg my-4" rows={3} onChange={handleChange}/> 
        <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-bold px-4  py-2 rounded-lg">Guardar</button>

      </form>

    </div>
  )
}



export default AdminDashboard
 */