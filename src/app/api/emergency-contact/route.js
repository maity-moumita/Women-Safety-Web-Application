import { NextResponse } from "next/server";
import connectToDB from "@/lib/dbConnect";
import EmergencyContact from "@/models/EmergencyContact";

export async function POST(req) {
    await connectToDB();
    const body = await req.json();

    try {
        const newContact = await EmergencyContact.create(body);
        return NextResponse.json(newContact, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}

export async function GET(req) {
    await connectToDB();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    if (!userId) {
        return NextResponse.json({ error: 'userId is required' }, { status: 400 });
    }

    const contacts = await EmergencyContact.find({ userId });
    return NextResponse.json(contacts);
}