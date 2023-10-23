"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'react-toastify';

export default function DeleteBtn({id}) {
    const router = useRouter();
    
    async function handleDelete(){
            // const router = useRouter();
            const confirmed =confirm("Are you sure you want to delete this contact?");
            if (confirmed){
                const res =await fetch(`http://localhost:3000/api/contacts/${id}`,{
                    method:"DELETE"
                });
                if(res.ok){
                    // toast
                    toast.success("contact deleted successfully")
                    // redirect
                    router.push("/contacts")
                }
            }
    }
  return (
    <div>
        <button onClick={handleDelete} className="py-2 px-6 bg-red-700 text-white rounded-full">
            Delete
          </button>
    </div>
  )
}
