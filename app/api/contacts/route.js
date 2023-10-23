import db from "@/libs/db";
import { NextResponse } from "next/server"
// EyFeCyZzBi6ghAVg
// mongodb+srv://owenalbert606:EyFeCyZzBi6ghAVg@cluster0.bqhvbfl.mongodb.net/?retryWrites=true&w=majority

// getting all contacts
export async function GET(){
    try {
        const contacts = await db.contact.findMany();
        return NextResponse.json(contacts)
        
    } catch (error) {
        console.log("error while fetching contacts",error)
        return(
            NextResponse.json({
                message:"failed to fetch contacts",
                error:error.message
            },{
                status:500
            })
        )
    }

}
// creating a new record
export async function POST(request){
    try {
        const {name,phone,email,profile}=await request.json()
            const newContact = await db.contact.create({
                data:{
                    name,
                    phone,
                    email,
                    profile
                }
            })
            // use prisma to create contact
        console.log(newContact)
        return NextResponse.json(newContact,{status:201})
        
    } catch (error) {
        console.log("error while creating contact",error)
        return(
            NextResponse.json({
                message:"failed to create contact",
                error:error.message
            },{
                status:500
            })
        )
        
    }
}