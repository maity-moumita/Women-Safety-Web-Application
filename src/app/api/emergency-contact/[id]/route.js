import { NextResponse } from "next/server";
import connectToDB from "@/lib/dbConnect";
import EmergencyContact from "@/models/EmergencyContact";

export async function DELETE(req, { params }) {
    await connectToDB();

    try {
        const deleted = await EmergencyContact.findByIdAndDelete(params.id);

        if(!deleted){
            return NextResponse.json({error: 'Contact Not Found'},{status:400});
        }
        return NextResponse.json({message: "Contact Deleted Successfully"}, {success: true });
    } catch (error) {
        return NextResponse.json({error: error.message},{status: 500});
    }
}