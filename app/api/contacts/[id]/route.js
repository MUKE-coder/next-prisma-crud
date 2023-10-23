import db from "@/libs/db";
import { NextResponse } from "next/server";

// getting all contacts
export async function GET(request,{params:{id}}){
    try {
        const contact = await db.contact.findUnique({
            where:{id},
        });
        if(!contact){
            return(
                NextResponse.json({
                    message:"contact not found",
                },{
                    status:404
                })
            )

        }
        return NextResponse.json(contact)
        
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
// deleting a single contact
export async function DELETE(request,{params:{id}}){
    try {
         await db.contact.delete({
            where:{id},
        });

        return NextResponse.json({
            message:"contact deleted successfully"
        })
        
    } catch (error) {
        console.log("error while deleting contacts",error)
        return(
            NextResponse.json({
                message:"failed to delete contacts",
                error:error.message
            },{
                status:500
            })
        )
    }

}