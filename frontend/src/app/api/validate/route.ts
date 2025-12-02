import { NextResponse } from 'next/server';
import { voters } from '@/data/voters';

export async function POST(request: Request) {
  try {
    const { voterId } = await request.json();

    const voterExists = voters.some((voter) => voter.voterId === voterId);

    if (voterExists) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, message: "Voter ID not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error validating voter ID" }, { status: 500 });
  }
}
