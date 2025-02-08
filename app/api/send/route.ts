import {Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { EmailTemplate } from '@/components/email-template'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest){
    const body = await req.json()

    const {firstName, email, message} = body

    if(!firstName || !email || !message){
        return NextResponse.json({error: 'Missing required fields'})
    }

    try{
        const {data, error} = await resend.emails.send({
            from: "Hotel As <info@hotelasbaksrrjoll.com>",
            to: 'hotelasbaksrrjoll@gmail.com',
            subject: 'New message from contact form',
            react: await EmailTemplate({firstName, email, message}),
            

        })
        if(error){
            return NextResponse.json({error: error.message})
        }

        return NextResponse.json({data})
    }catch(error){
        console.error(error)
        return NextResponse.json({message: "Failed to send email"})
    }
}