import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    
    // Simple mailto redirect - opens user's email client
    const mailtoLink = `mailto:isimbi0123@gmail.com?subject=New message from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;
    
    return NextResponse.json({ 
      success: true, 
      mailtoLink: mailtoLink 
    });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}